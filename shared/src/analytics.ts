// ============================================================================
// Analytics Events
// ============================================================================

export const ANALYTICS_EVENTS = {
  WAITLIST_FORM_VIEWED: "waitlist_form_viewed",
  WAITLIST_FORM_SUBMITTED: "waitlist_form_submitted",
  WAITLIST_FORM_SUCCESS: "waitlist_form_success",
  WAITLIST_FORM_ERROR: "waitlist_form_error",
  CTA_CLICKED: "cta_clicked",
  SECTION_VIEWED: "section_viewed",
} as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

// ============================================================================
// Analytics Interface
// ============================================================================

interface AnalyticsProvider {
  track(event: AnalyticsEvent, properties?: Record<string, unknown>): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
  page(name: string, properties?: Record<string, unknown>): void;
}

// ============================================================================
// Noop Provider (for development / before PostHog is set up)
// ============================================================================

const noopProvider: AnalyticsProvider = {
  track(_event, _properties) {
    // noop
  },
  identify(_userId, _traits) {
    // noop
  },
  page(_name, _properties) {
    // noop
  },
};

// ============================================================================
// Analytics Singleton
// ============================================================================

let provider: AnalyticsProvider = noopProvider;

export function setAnalyticsProvider(newProvider: AnalyticsProvider): void {
  provider = newProvider;
}

export const analytics = {
  track(event: AnalyticsEvent, properties?: Record<string, unknown>): void {
    provider.track(event, properties);
  },

  identify(userId: string, traits?: Record<string, unknown>): void {
    provider.identify(userId, traits);
  },

  page(name: string, properties?: Record<string, unknown>): void {
    provider.page(name, properties);
  },
};
