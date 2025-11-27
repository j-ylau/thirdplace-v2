import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { AuthRole, type ApiResult, type AuthUser, type WaitlistEntry, type WaitlistFormData } from "./types";
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

// ============================================================================
// Auth Service
// ============================================================================

interface SupabaseUser {
  id: string;
  email?: string;
  user_metadata?: {
    role?: string;
  };
}

function mapSupabaseUserToAuthUser(user: SupabaseUser): AuthUser {
  const roleValue = user.user_metadata?.role;
  const role = roleValue === AuthRole.ADMIN ? AuthRole.ADMIN : AuthRole.USER;

  return {
    id: user.id,
    email: user.email ?? "",
    role,
  };
}

export async function signInWithMagicLink(email: string): Promise<ApiResult<null>> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error !== null) {
      logger.error("Magic link sign-in failed", { error: error.message });
      return { success: false, error: ERRORS.AUTH_MAGIC_LINK_FAILED };
    }

    return { success: true, data: null };
  } catch (error) {
    logger.error("Magic link sign-in failed", { error: String(error) });
    return { success: false, error: ERRORS.NETWORK_FAILED };
  }
}

export async function getCurrentAuthUser(): Promise<AuthUser | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getUser();

    if (error !== null) {
      logger.warn("Failed to get auth user", { error: error.message });
      return null;
    }

    return mapSupabaseUserToAuthUser(data.user);
  } catch (error) {
    logger.error("Failed to get auth user", { error: String(error) });
    return null;
  }
}

export async function signOut(): Promise<ApiResult<null>> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signOut();

    if (error !== null) {
      logger.error("Sign out failed", { error: error.message });
      return { success: false, error: ERRORS.AUTH_SIGN_OUT_FAILED };
    }

    return { success: true, data: null };
  } catch (error) {
    logger.error("Sign out failed", { error: String(error) });
    return { success: false, error: ERRORS.NETWORK_FAILED };
  }
}
