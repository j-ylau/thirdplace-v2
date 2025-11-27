# the stack you should use: 

### **frontend**

1. **Next.js (web)** — fastest developer velocity, SSR optional, React ecosystem
2. **Expo + React Native (mobile)** — unified UI primitives, OTA updates, easiest mobile DX
3. **React Native Web** support later if needed

---

### **shared**

1. **shared/ design system** (Button, Input, Card, etc.)
2. **shared/ services** (all API + data logic, typed)
3. **shared/ types, constants, i18n**
4. **shared/ hooks** (only cross-platform logic)
5. **Turborepo** (task caching, builds, lint, typecheck)

---

### **backend**

1. **Hono** (fast, tiny, edge-ready) or **Express** if you prefer Node simplicity
2. **Supabase Postgres** (auth, DB, storage)
3. **Supabase Edge Functions** or **Vercel Edge Functions** for compute
4. **Prisma** (optional) if you want an ORM
5. **Zod** for API validation

---

### **infra**

1. **pnpm** (fastest monorepo package manager)
2. **TURBOREPO / Vite** (dev) + **Next.js build** (prod)
3. **Husky + lint-staged** (pre-commit: lint, typecheck, build)
4. **ESLint + Prettier**
5. **Shared root tsconfig** (strict) + per-package tsconfig extends it

---

### **styling**

1. web = shadcn
2. mobile = react-native-reusables

---

### **data layer**

1. **TanStack Query** (Web + Mobile)
2. **Supabase JS Client** inside `shared/services.ts`
3. **Strict Zod schemas** at every boundary
4. **Fail-fast typed API responses**

---

### **analytics**

1. **PostHog** (self-host optional, works on web + RN)
2. **Sentry** (errors on web + mobile + backend)

---

### **deployment**

1. **Web → Vercel**
2. **Backend → Vercel Functions or Supabase Edge Functions**
3. **Mobile → Expo EAS**

---

### **note**

Everything imports from `shared/`, nothing touches Supabase or API directly except `shared/services.ts`.


### BRANDING

remember: 

- all colors, spacing, typography tokens go in `shared/src/theme.ts`
- no hardcoded colors, margins, or font sizes anywhere
- all components must use theme tokens only

but for branding/marketing lets do 
#4E3D42
#4E3D42
#4E3D42
#4E3D42
#4E3D42



# **rules**

1. all errors go in **`shared/src/error.ts`**

2. all types and interfaces go in **`shared/src/types.ts`**

3. all strings go in **`shared/src/i18n/en.ts`** using i18n only

4. all constants go in **`shared/src/constants.ts`**

5. all API calls go in **`shared/src/services.ts`**

6. all validation schemas go in **`shared/src/validation.ts`**

7. all utility functions go in **`shared/src/utils.ts`**

8. all custom hooks go in **`shared/src/hooks.ts`** or `shared/src/hooks/*.ts`

9. all shared UI components go in **`shared/src/components/`**

   * `shared/src/components/Button.tsx`
   * `shared/src/components/Input.tsx`
   * `shared/src/components/Card.tsx`
   * `shared/src/components/Avatar.tsx`
   * `shared/src/components/Tag.tsx`
   * etc.

all colors, spacing, typography tokens go in shared/src/theme.ts
no hardcoded colors, margins, or font sizes anywhere
all components must use theme tokens only


Good call — there are a few categories missing that would tighten things up. Here's what I'd consider adding:

**Design System**
- all colors, spacing, typography tokens go in `shared/src/theme.ts`
- no hardcoded colors, margins, or font sizes anywhere
- all components must use theme tokens only

**Naming Conventions**
- files: `kebab-case.ts`
- components: `PascalCase.tsx`
- hooks: `useCamelCase.ts`
- types: `PascalCase` (e.g., `type PlaceData`)
- constants: `SCREAMING_SNAKE_CASE`

**Imports**
- must use path aliases (`@shared/`, `@web/`, `@mobile/`)
- no relative imports deeper than one level (`../` max)
- import order: external → shared → local

**Testing**
- tests live next to the file: `utils.test.ts` beside `utils.ts`
- or in `__tests__/` folder at same level
- minimum coverage threshold (optional but recommended)

**Environment Variables**
- all env vars defined in `shared/src/env.ts`
- validated with zod at startup
- no `process.env` access outside `env.ts`

**State Management**
- global state lives in `shared/src/store/`
- local UI state stays in components
- no prop drilling beyond 2 levels — use context or store

**Assets**
- all icons in `shared/src/assets/icons/`
- all images in `shared/src/assets/images/`
- no inline SVGs in components

**Git**
- conventional commits (`feat:`, `fix:`, `chore:`, etc.)
- branch naming: `feat/thing`, `fix/thing`, `chore/thing`

Want me to write these into your existing rulebook format?
10. all shared layouts go in **`shared/src/layouts/`**

11. **all screen files** stay in their respective apps:

    * `app/web/*` (Next.js or Vite)
    * `app/mobile/*` (Expo Router)

12. **no logic allowed inside screens**

* `app/web/**/*.tsx`
* `app/mobile/**/*.tsx`

13. **no logic allowed inside UI components**

* `shared/src/components/*.tsx`
* UI is presentation only

14. **no inline:**

* strings → must use i18n
* numbers → must be constants
* errors → must be from `error.ts`

15. **no business logic inside screens or components** — only in:

* `shared/src/services.ts`
* `shared/src/utils.ts`
* `shared/src/hooks.ts`

16. **no supabase or network calls** outside `shared/src/services.ts`

---

# **other things**

1. **husky must run before every commit:**

   * `pnpm lint`
   * `pnpm typecheck`
   * `pnpm build`
     commit fails on any error.

2. **tsconfig must be extremely strict** (in `/shared/tsconfig.json` AND in each app)

   * strict: true
   * noImplicitAny: true
   * noUncheckedIndexedAccess: true
   * exactOptionalPropertyTypes: true
   * noFallthroughCasesInSwitch: true
   * noUnusedLocals / noUnusedParams
   * skipLibCheck: false
   * isolatedModules: true
   * forceConsistentCasingInFileNames: true

3. **fail fast — trust the data layer**

   * services validate all data
   * UI never validates backend data
   * no silent fallback or guesswork

4. **strict typing everywhere**

   * no `any`
   * no `unknown`
   * no `null`
   * no `!` non-null assertions
   * all return types must be explicit
   * prefer discriminated unions for errors + responses

   all logs go through shared/src/logger.ts
no raw console.log in production code
structured logging with levels (info, warn, error)

Error Boundaries

every screen wrapped in error boundary
error boundaries live in shared/src/components/ErrorBoundary.tsx

Loading & Error States

standard loading/error/empty patterns in shared/src/components/
no custom spinners per screen

Date/Time

one date library only (date-fns or dayjs)
all formatting functions in shared/src/utils/date.ts
store dates as ISO strings

Dependencies

shared deps go in shared/package.json
platform-specific deps go in app/web/ or app/mobile/
no duplicate deps across packages

Analytics

all tracking calls go through shared/src/analytics.ts
no direct analytics SDK calls in components

Accessibility

all interactive elements must have labels
all images must have alt text

Performance (optional, maybe overkill for MVP)

no inline function definitions in JSX props
memoize expensive computations


### file architecture

app/web
app/mobile

backend/

apps import everything from shared

shared/ 

and should use `turborepo` and all repos should share an extremely strict root tsconfig but every package extends it with a local tsconfig