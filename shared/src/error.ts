import type { AppError } from "./types";

// ============================================================================
// Error Codes
// ============================================================================

export const ERROR_CODES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  NOT_FOUND: "NOT_FOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  WAITLIST_FAILED: "WAITLIST_FAILED",
  AUTH_MAGIC_LINK_FAILED: "AUTH_MAGIC_LINK_FAILED",
  AUTH_GET_USER_FAILED: "AUTH_GET_USER_FAILED",
  AUTH_SIGN_OUT_FAILED: "AUTH_SIGN_OUT_FAILED",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

// ============================================================================
// Error Factory
// ============================================================================

export function createError(code: ErrorCode, message: string): AppError {
  return { code, message };
}

// ============================================================================
// Common Errors
// ============================================================================

export const ERRORS = {
  INVALID_EMAIL: createError(ERROR_CODES.VALIDATION_ERROR, "Please enter a valid email address"),
  INVALID_CITY: createError(ERROR_CODES.VALIDATION_ERROR, "Please enter your city"),
  NETWORK_FAILED: createError(ERROR_CODES.NETWORK_ERROR, "Network request failed"),
  WAITLIST_FAILED: createError(ERROR_CODES.WAITLIST_FAILED, "Failed to join waitlist"),
  AUTH_MAGIC_LINK_FAILED: createError(ERROR_CODES.AUTH_MAGIC_LINK_FAILED, "Failed to send magic link"),
  AUTH_GET_USER_FAILED: createError(ERROR_CODES.AUTH_GET_USER_FAILED, "Failed to get user"),
  AUTH_SIGN_OUT_FAILED: createError(ERROR_CODES.AUTH_SIGN_OUT_FAILED, "Failed to sign out"),
} as const;
