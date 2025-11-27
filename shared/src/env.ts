import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

function getEnvVariables(): z.infer<typeof envSchema> {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env["NEXT_PUBLIC_SUPABASE_URL"],
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"],
  });

  if (!result.success) {
    console.error("Invalid environment variables:", result.error.flatten());
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

export const env = getEnvVariables();
