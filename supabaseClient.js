import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Copy .env.example to .env and use the SAME values as the school management system project — this site reads from the same database."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
