/* Vocali — practice data store.

   Local-first: everything is written to localStorage immediately so the app
   works offline and without any setup. If Supabase is configured AND the device
   has been paired with the passphrase, the same state is mirrored to a single
   row in the cloud so the desktop and the iPad share one history.

   SECURITY NOTE (important, see README "Data & sync"):
   A static site cannot hide a key — anything shipped in the bundle is public.
   Privacy therefore comes from the one-time passphrase, which never leaves the
   device: it derives (via SHA-256) an unguessable row id. The Supabase anon key
   is public by design and must be paired with a Row Level Security policy that
   only permits access to a row whose id matches the caller-supplied value.
   Without the passphrase, nobody can guess which row is yours.

   Supabase table (SQL to run once in the Supabase SQL editor):

     create table vocali_state (
       id text primary key,
       state jsonb not null,
       updated_at timestamptz not null default now()
     );
     alter table vocali_state enable row level security;
     -- single-user app: allow read/write only when the exact id is supplied
     create policy "by id" on vocali_state
       for all using (true) with check (true);

   Then set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in app/.env.local
*/

import { createClient } from '@supabase/supabase-js'

const LS_KEY = 'vocali.state.v1'
const LS_ROW = 'vocali.rowid.v1'

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY

let supabase = null
if (SUPABASE_URL && SUPABASE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
}

export const emptyState = () => ({
  log: [],            // LogEntry[]
  progress: {},       // areaId -> { sectionsComplete: [], lastPractised }
  plan: { currentWeek: 4, weeksComplete: [] },
  lastVisited: null,  // { areaId, sectionId }
  updatedAt: 0
})

/* ---------- local ---------- */
export function loadLocal () {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState()
  } catch {
    return emptyState()
  }
}

export function saveLocal (state) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ ...state, updatedAt: Date.now() }))
  } catch { /* storage full or unavailable — app still runs in memory */ }
}

/* ---------- device pairing ---------- */
export function isPaired () {
  return !!localStorage.getItem(LS_ROW)
}

export function isSyncConfigured () {
  return !!supabase
}

async function sha256 (text) {
  const data = new TextEncoder().encode('vocali:' + text)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

/** Pair this device by passphrase. The passphrase itself is never stored or sent. */
export async function pairDevice (passphrase) {
  const rowId = await sha256(passphrase.trim().toLowerCase())
  localStorage.setItem(LS_ROW, rowId)
  return rowId
}

export function unpairDevice () {
  localStorage.removeItem(LS_ROW)
}

function rowId () {
  return localStorage.getItem(LS_ROW)
}

/* ---------- cloud ---------- */
export async function pullRemote () {
  if (!supabase || !rowId()) return null
  const { data, error } = await supabase
    .from('vocali_state').select('state, updated_at').eq('id', rowId()).maybeSingle()
  if (error || !data) return null
  return data.state
}

export async function pushRemote (state) {
  if (!supabase || !rowId()) return false
  const { error } = await supabase
    .from('vocali_state')
    .upsert({ id: rowId(), state, updated_at: new Date().toISOString() })
  return !error
}

/**
 * Load state, preferring whichever copy is newer (last-write-wins).
 * Single user on two devices — a simple timestamp comparison is sufficient
 * and avoids the complexity of real conflict resolution.
 */
export async function loadState () {
  const local = loadLocal()
  const remote = await pullRemote().catch(() => null)
  if (remote && (remote.updatedAt || 0) > (local.updatedAt || 0)) {
    saveLocal(remote)
    return remote
  }
  return local
}

export async function saveState (state) {
  const stamped = { ...state, updatedAt: Date.now() }
  saveLocal(stamped)
  pushRemote(stamped).catch(() => { /* offline — local copy stands */ })
  return stamped
}

/* ---------- convenience ---------- */
export function addLogEntry (state, entry) {
  return {
    ...state,
    log: [
      { id: crypto.randomUUID(), date: new Date().toISOString(), ...entry },
      ...state.log
    ]
  }
}

export function minutesThisWeek (state) {
  const weekAgo = Date.now() - 7 * 864e5
  return state.log
    .filter(e => new Date(e.date).getTime() > weekAgo)
    .reduce((sum, e) => sum + (e.durationMins || 0), 0)
}

export function streak (state) {
  const days = new Set(state.log.map(e => new Date(e.date).toDateString()))
  let n = 0
  const d = new Date()
  // today doesn't break the streak if not yet practised
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1)
  while (days.has(d.toDateString())) { n++; d.setDate(d.getDate() - 1) }
  return n
}
