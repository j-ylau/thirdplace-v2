import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (supabaseClient !== null) {
    return supabaseClient;
  }

  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"];

  if (url === undefined || url === "" || key === undefined || key === "") {
    throw new Error("Missing Supabase environment variables");
  }

  supabaseClient = createClient(url, key);
  return supabaseClient;
}
