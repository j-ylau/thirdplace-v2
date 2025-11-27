import type { en } from "./i18n/en";

// ============================================================================
// Enums
// ============================================================================

export enum PlaceCategory {
  CAFE = "cafe",
  LIBRARY = "library",
  TEA = "tea",
  PARK = "park",
}

export enum FeatureIcon {
  WIFI = "wifi",
  OUTLETS = "outlets",
  NOISE = "noise",
  RESTROOM = "restroom",
  ROUTINE = "routine",
  SEATING = "seating",
}

export enum ApiResultStatus {
  SUCCESS = "success",
  FAILURE = "failure",
}

export enum AuthRole {
  ADMIN = "admin",
  USER = "user",
}

export enum AuthStatus {
  IDLE = "idle",
  LOADING = "loading",
  SENT = "sent",
  ERROR = "error",
}

// ============================================================================
// Landing Page Types
// ============================================================================

export interface LandingFeature {
  id: string;
  i18nTitleKey: keyof typeof en;
  i18nDescriptionKey: keyof typeof en;
  icon: FeatureIcon;
}

export interface LandingScenario {
  id: string;
  i18nTitleKey: keyof typeof en;
  i18nDescriptionKey: keyof typeof en;
  emoji: string;
}

export interface ExamplePlace {
  id: string;
  i18nNameKey: keyof typeof en;
  i18nLocationKey: keyof typeof en;
  tags: readonly string[];
  category: PlaceCategory;
}

// ============================================================================
// API Response Types
// ============================================================================

export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: AppError };

export interface AppError {
  code: string;
  message: string;
}

// ============================================================================
// Waitlist Types
// ============================================================================

export interface WaitlistEntry {
  id: string;
  email: string;
  city: string;
  createdAt: string;
}

export interface WaitlistFormData {
  email: string;
  city: string;
}

// ============================================================================
// Auth Types
// ============================================================================

export interface AuthUser {
  id: string;
  email: string;
  role: AuthRole;
}
