import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { ApiResult, WaitlistEntry, WaitlistFormData } from "./types";
import { ERRORS } from "./error";
import { waitlistFormSchema } from "./validation";
import { logger } from "./logger";

// ============================================================================
// Supabase Client
// ============================================================================

let supabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
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

// ============================================================================
// Waitlist Service
// ============================================================================

export async function subscribeToWaitlist(
  data: WaitlistFormData
): Promise<ApiResult<WaitlistEntry>> {
  const validation = waitlistFormSchema.safeParse(data);

  if (!validation.success) {
    const firstError = validation.error.errors[0];
    return {
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: firstError?.message ?? "Validation failed",
      },
    };
  }

  try {
    const supabase = getSupabaseClient();
    const response = await supabase
      .from("waitlist")
      .insert({
        email: validation.data.email,
        city: validation.data.city,
      })
      .select()
      .single();

    if (response.error !== null) {
      logger.error("Waitlist subscription failed", { error: response.error });
      return { success: false, error: ERRORS.WAITLIST_FAILED };
    }

    const entry = response.data as WaitlistEntry;

    return {
      success: true,
      data: entry,
    };
  } catch (error) {
    logger.error("Waitlist subscription failed", { error: String(error) });
    return { success: false, error: ERRORS.NETWORK_FAILED };
  }
}
