// ============================================================================
// String Utilities
// ============================================================================

export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  const first = str[0];
  if (first === undefined) {
    return str;
  }
  return first.toUpperCase() + str.slice(1);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + "...";
}

// ============================================================================
// Validation Utilities
// ============================================================================

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================================================
// Class Name Utilities
// ============================================================================

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
