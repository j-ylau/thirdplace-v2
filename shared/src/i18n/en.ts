export const en = {
  // ============================================================================
  // Hero Section
  // ============================================================================
  landingHeroTitle: "You don't want to go home.\nWe'll tell you where to go instead.",
  landingHeroSubtitle:
    "ThirdPlace finds cozy, quiet, plug-friendly spots near you — with WiFi, outlets, restrooms, and vibes you actually like.",
  landingHeroCtaPrimary: "Get early access",
  landingHeroCtaSecondary: "See how it works",
  landingHeroBadge: "Now testing in Seattle",
  landingHeroEmailPlaceholder: "you@email.com",
  landingHeroCityPlaceholder: "Your city",

  // ============================================================================
  // Problem Section
  // ============================================================================
  landingProblemSectionTitle: "You don't want to go home. But… where do you go?",
  landingProblemAfterWorkTitle: "After work",
  landingProblemAfterWorkDescription:
    "You finished work at 5:30. Too early to go home. Too late to wander around.",
  landingProblemBetweenPlansTitle: "Between plans",
  landingProblemBetweenPlansDescription:
    "You've got dinner at 7. You're in the city already. You need somewhere to exist.",
  landingProblemNeedFocusTitle: "Need to focus",
  landingProblemNeedFocusDescription:
    "Home is distracting. Cafés are chaotic. You just want a quiet, cozy spot with outlets.",

  // ============================================================================
  // How It Works Section
  // ============================================================================
  landingHowItWorksSectionTitle: "How ThirdPlace works",
  landingHowItWorksStep1Title: "Tell us your vibe",
  landingHowItWorksStep1Description: "Pick what matters: quiet, cozy, social, study, reset.",
  landingHowItWorksStep2Title: "We read the city for you",
  landingHowItWorksStep2Description:
    "WiFi, outlets, noise level, seating, restrooms — all surfaced.",
  landingHowItWorksStep3Title: "Walk in already knowing the vibe",
  landingHowItWorksStep3Description: "No guesswork. Just places that match how you feel.",

  // ============================================================================
  // Features Section
  // ============================================================================
  landingFeaturesSectionTitle: "What we surface",
  landingFeatureWifiTitle: "WiFi & outlets, always surfaced",
  landingFeatureWifiDescription: "Know before you go if you can actually work there.",
  landingFeatureNoiseTitle: "Noise level & crowd energy",
  landingFeatureNoiseDescription: "Quiet study spot or buzzing café — your call.",
  landingFeatureRestroomsTitle: "Restrooms & 'can I stay here?' factor",
  landingFeatureRestroomsDescription: "The stuff reviews never tell you but you always need.",
  landingFeatureSeatingTitle: "Seating & space",
  landingFeatureSeatingDescription: "Find spots with tables, not just bar stools.",
  landingFeatureRoutinesTitle: "Real routines, not one-off recs",
  landingFeatureRoutinesDescription: "Build a rotation of go-to spots that fit your life.",

  // ============================================================================
  // Example Places
  // ============================================================================
  landingPlaceCozyCafeName: "The Roastery",
  landingPlaceCozyCafeLocation: "Capitol Hill",
  landingPlaceQuietLibraryName: "Central Library",
  landingPlaceQuietLibraryLocation: "Downtown",
  landingPlaceTeaHouseName: "Jade Garden Tea",
  landingPlaceTeaHouseLocation: "International District",

  // ============================================================================
  // Invite Section
  // ============================================================================
  landingInviteTitle: "Join early testers in Seattle",
  landingInviteQuote1: "I don't open Maps anymore, I just open ThirdPlace.",
  landingInviteQuote2: "I finally have somewhere to go between work and dinner.",

  // ============================================================================
  // Final CTA Section
  // ============================================================================
  landingFinalCtaTitle: "Be one of the first 500 in your city.",
  landingFinalCtaSubtitle: "We'll only email when your city launches. No spam.",
  landingFinalCtaIos: "iOS first",
  landingFinalCtaAndroid: "Android later",

  // ============================================================================
  // Footer
  // ============================================================================
  landingFooterTagline: "ThirdPlace helps you find somewhere to go when you don't want to go home.",

  // ============================================================================
  // Navigation
  // ============================================================================
  navHowItWorks: "How it works",
  navForRemoteWorkers: "For remote workers",
  navForStudents: "For students",
  navGetEarlyAccess: "Get early access",

  // ============================================================================
  // Common
  // ============================================================================
  commonSubmit: "Submit",
  commonLoading: "Loading...",
  commonError: "Something went wrong",
  commonSuccess: "Success!",

  // ============================================================================
  // Errors
  // ============================================================================
  errorInvalidEmail: "Please enter a valid email address",
  errorInvalidCity: "Please enter your city",
  errorWaitlistFailed: "Failed to join waitlist. Please try again.",

  // ============================================================================
  // Auth / Login
  // ============================================================================
  authLoginTitle: "Admin login",
  authLoginSubtitle: "Enter your email to receive a magic link.",
  authEmailPlaceholder: "you@email.com",
  authSendMagicLink: "Send magic link",
  authSending: "Sending...",
  authCheckEmail: "Check your email for the magic link.",
  authLoginFailed: "Something went wrong. Try again.",
  authLogout: "Log out",

  // ============================================================================
  // Admin Dashboard
  // ============================================================================
  adminDashboardTitle: "Admin Dashboard",
  adminDashboardWelcome: "Welcome back",
} as const;

export type TranslationKey = keyof typeof en;
