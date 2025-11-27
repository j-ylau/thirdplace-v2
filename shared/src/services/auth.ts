import { AuthRole, type ApiResult, type AuthUser } from "../types";
import { ERRORS } from "../error";
import { logger } from "../logger";
import { getSupabaseClient } from "./client";

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
