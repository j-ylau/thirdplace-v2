"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentAuthUser } from "@thirdplace/shared/services/auth";
import type { AuthUser } from "@thirdplace/shared/types";

const AUTH_QUERY_KEY = ["auth", "user"] as const;
const STALE_TIME_MS = 60000;

export function useAuthUser() {
  return useQuery<AuthUser | null>({
    queryKey: AUTH_QUERY_KEY,
    queryFn: getCurrentAuthUser,
    staleTime: STALE_TIME_MS,
  });
}

export function useInvalidateAuth() {
  const queryClient = useQueryClient();

  return function invalidateAuth(): Promise<void> {
    return queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEY });
  };
}
