import { supabase } from "./supabaseClient";

// Read-only — the public website only ever displays content (news, gallery photos),
// it never writes to the shared database. All editing happens through the SMS admin panel.
export async function getItem(key) {
  const { data, error } = await supabase.from("app_storage").select("value").eq("key", key).maybeSingle();
  if (error) {
    console.error(`Read error for "${key}":`, error);
    return null;
  }
  return data ? data.value : null;
}
