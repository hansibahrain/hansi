# Arabic Version Plan for HANSI

## Goal
Add a fully Arabic version of the HANSI site with right-to-left (RTL) layout support and a language switcher.

## Recommended approach
Use a **lightweight custom i18n layer** instead of a heavy library. The site content is mostly static marketing copy, so a translation dictionary + React context is simpler, smaller, and easier to maintain than `react-i18next`.

## What will be added

1. **Arabic font**
   - Load a friendly Arabic display font from Google Fonts, e.g. **Cairo** or **Tajawal**.
   - Use it as the body/heading font when Arabic is active.

2. **Translation system**
   - Create `src/lib/i18n/translations.ts` with `en` and `ar` dictionaries.
   - Create `src/lib/i18n/language-provider.tsx` React context to hold current language, `toggleLanguage`, and `t(key)` helper.

3. **RTL support**
   - Update `components.json` to set `rtl: true`.
   - In `src/routes/__root.tsx`, apply `lang="ar" dir="rtl"` to `<html>` when Arabic is selected, otherwise `lang="en" dir="ltr"`.
   - Add RTL-safe Tailwind utilities and flip directional icons/arrow emojis where needed.

4. **Language switcher**
   - Add an "EN / عربي" toggle in the desktop header and mobile menu.

5. **Translate content**
   - Replace hard-coded English copy in all route files with `t('...')` lookups:
     - `src/routes/index.tsx`
     - `src/routes/menu.tsx`
     - `src/routes/catering.tsx`
     - `src/routes/where-we-are.tsx`
     - `src/routes/about.tsx`
     - `src/routes/contact.tsx`
   - Translate shared data in `src/lib/hansi.ts` (menu names/descriptions, events, catering types, footer/nav labels) by making it language-aware.

6. **WhatsApp messages**
   - Keep WhatsApp pre-filled messages in the language the user is currently browsing.

7. **SEO/meta**
   - Update page `title`, `description`, and Open Graph tags to the active language.

## Out of scope for this plan
- Separate `/ar/` URL paths. The language toggle will switch the same page in-place. If you later want prefixed URLs, we can add TanStack Router route prefixes in a follow-up.

## Result
Visitors can toggle between English and Arabic instantly. Arabic mode uses an Arabic-friendly font, flips the layout to RTL, and shows translated copy, menu, events, and forms.
