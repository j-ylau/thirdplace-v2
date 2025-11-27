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
} as const;
