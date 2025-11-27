import { z } from "zod";

// ============================================================================
// Waitlist Schemas
// ============================================================================

export const waitlistFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(1, "Please enter your city"),
});

export type WaitlistFormInput = z.infer<typeof waitlistFormSchema>;

// ============================================================================
// API Response Schemas
// ============================================================================

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
});

export function apiSuccessSchema<T extends z.ZodType>(
  dataSchema: T
): z.ZodObject<{ success: z.ZodLiteral<true>; data: T }> {
  return z.object({
    success: z.literal(true),
    data: dataSchema,
  });
}

export const apiFailureSchema = z.object({
  success: z.literal(false),
  error: apiErrorSchema,
});
