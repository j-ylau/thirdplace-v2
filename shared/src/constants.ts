import {
  type LandingFeature,
  type LandingScenario,
  type ExamplePlace,
  PlaceCategory,
  FeatureIcon,
} from "./types";

// ============================================================================
// Landing Page Constants
// ============================================================================

export const LANDING_SCENARIOS: readonly LandingScenario[] = [
  {
    id: "after-work",
    i18nTitleKey: "landingProblemAfterWorkTitle",
    i18nDescriptionKey: "landingProblemAfterWorkDescription",
    emoji: "🌆",
  },
  {
    id: "between-plans",
    i18nTitleKey: "landingProblemBetweenPlansTitle",
    i18nDescriptionKey: "landingProblemBetweenPlansDescription",
    emoji: "⏰",
  },
  {
    id: "need-focus",
    i18nTitleKey: "landingProblemNeedFocusTitle",
    i18nDescriptionKey: "landingProblemNeedFocusDescription",
    emoji: "🎯",
  },
] as const;

export const LANDING_FEATURES: readonly LandingFeature[] = [
  {
    id: "wifi-outlets",
    i18nTitleKey: "landingFeatureWifiTitle",
    i18nDescriptionKey: "landingFeatureWifiDescription",
    icon: FeatureIcon.WIFI,
  },
  {
    id: "noise-level",
    i18nTitleKey: "landingFeatureNoiseTitle",
    i18nDescriptionKey: "landingFeatureNoiseDescription",
    icon: FeatureIcon.NOISE,
  },
  {
    id: "restrooms",
    i18nTitleKey: "landingFeatureRestroomsTitle",
    i18nDescriptionKey: "landingFeatureRestroomsDescription",
    icon: FeatureIcon.RESTROOM,
  },
  {
    id: "seating",
    i18nTitleKey: "landingFeatureSeatingTitle",
    i18nDescriptionKey: "landingFeatureSeatingDescription",
    icon: FeatureIcon.SEATING,
  },
  {
    id: "routines",
    i18nTitleKey: "landingFeatureRoutinesTitle",
    i18nDescriptionKey: "landingFeatureRoutinesDescription",
    icon: FeatureIcon.ROUTINE,
  },
] as const;

export const LANDING_EXAMPLE_PLACES: readonly ExamplePlace[] = [
  {
    id: "cozy-cafe",
    i18nNameKey: "landingPlaceCozyCafeName",
    i18nLocationKey: "landingPlaceCozyCafeLocation",
    tags: ["quiet", "cozy", "outlets", "wifi"],
    category: PlaceCategory.CAFE,
  },
  {
    id: "quiet-library",
    i18nNameKey: "landingPlaceQuietLibraryName",
    i18nLocationKey: "landingPlaceQuietLibraryLocation",
    tags: ["silent", "study", "wifi", "restroom"],
    category: PlaceCategory.LIBRARY,
  },
  {
    id: "tea-house",
    i18nNameKey: "landingPlaceTeaHouseName",
    i18nLocationKey: "landingPlaceTeaHouseLocation",
    tags: ["calm", "aesthetic", "outlets"],
    category: PlaceCategory.TEA,
  },
] as const;

// ============================================================================
// App Constants
// ============================================================================

export enum VibeTag {
  QUIET = "quiet",
  COZY = "cozy",
  SOCIAL = "social",
  STUDY = "study",
  RESET = "reset",
  AESTHETIC = "aesthetic",
  CALM = "calm",
  SILENT = "silent",
}

export enum City {
  SEATTLE = "Seattle",
  SAN_FRANCISCO = "San Francisco",
  NEW_YORK = "New York",
  LOS_ANGELES = "Los Angeles",
}

export const WAITLIST_LIMIT = 500;
