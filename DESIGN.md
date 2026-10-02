# Design

The design system for the Chembur Ramleela site. Tokens live in `src/styles/tokens.css`, shared primitives in `src/styles/base.css`, and section styles beside each component in `src/sections/`. Keep this file in sync with them.

## Brief

- **Audience:** families in and around Chembur, Mumbai, mostly on phones, deciding whether and when to attend.
- **Primary job:** answer "when, where, and what is on tonight" at a glance, then give the programme, contact, and donation routes.
- **Success:** the hero alone states dates, venue, free entry, and the live season status; the full programme is one tap away.

## Signature

The hero image is framed as a temple arch or proscenium (`.arch` in `src/sections/Hero.css`), tying the page to a stage performance. It is the only decorative device; everything else stays plain.

## Palette

Night stage, kumkum red, marigold, and paper.

| Token             | Value                     | Role                                                       |
| ----------------- | ------------------------- | ---------------------------------------------------------- |
| `--night`         | `#1c1311`                 | Dark sections (hero, gallery), `theme-color`               |
| `--night-raised`  | `#2a1d19`                 | Raised surfaces on dark                                    |
| `--night-deep`    | `#140d0b`                 | Scrollbar track, deepest dark                              |
| `--kumkum`        | `#9b1c1c`                 | Brand red, scrollbar thumb, live accents                   |
| `--kumkum-deep`   | `#5e1212`                 | Highlights section background                              |
| `--marigold`      | `#eaa21a`                 | Primary button, focus ring, selection, live and next state |
| `--marigold-soft` | `#f7d48a`                 | Button hover                                               |
| `--paper`         | `#fbf8f4`                 | Page background                                            |
| `--paper-sunk`    | `#f3ede5`                 | Recessed light surfaces                                    |
| `--ink`           | `#221917`                 | Body text on light                                         |
| `--ash`           | `#6b5e57`                 | Secondary text on light                                    |
| `--line`          | `#e6ddd3`                 | Dividers on light                                          |
| `--on-dark`       | `#f6eee5`                 | Text on dark                                               |
| `--on-dark-muted` | `#c2b1a5`                 | Secondary text on dark                                     |
| `--line-dark`     | `rgb(246 238 229 / 0.14)` | Dividers on dark                                           |

Sections alternate light (`.section`), dark (`.section--dark`), and red (`.section--kumkum`) backgrounds to separate content without cards.

## Typography

- **Display:** Tiro Devanagari Hindi 400, for `h1` to `h3` and the Devanagari "रामलीला" in the hero. Fallback Georgia, serif.
- **Body:** Mukta 400, 500, 600, 700. Fallback system UI sans.
- Both are self-hosted via Fontsource (see ARCHITECTURE.md).

| Token        | Mobile    | 768px and up |
| ------------ | --------- | ------------ |
| `--text-xs`  | 0.8125rem | same         |
| `--text-sm`  | 0.9375rem | same         |
| `--text-md`  | 1.0625rem | same (body)  |
| `--text-lg`  | 1.25rem   | same         |
| `--text-xl`  | 1.5rem    | same         |
| `--text-2xl` | 2rem      | same         |
| `--text-3xl` | 2.5rem    | 3rem         |
| `--text-4xl` | 3.25rem   | 4rem         |
| `--text-5xl` | 4rem      | 5.25rem      |

Sizes step at a breakpoint and never scale with viewport width. Body line height is 1.6, headings 1.1 with `text-wrap: balance`. The `.overline` style (xs, 600, 0.14em tracking, uppercase) is used for eyebrows, footer headings, and status labels.

## Spacing and layout

- Spacing scale on a 4px base: `--space-1` (0.25rem) to `--space-9` (6rem).
- Radii: `--radius-sm` 6px, `--radius-md` 10px, `--radius-pill` 999px.
- Container: `--container` 72rem max, `--gutter` 1.25rem (2rem from 768px).
- Header height `--header-height` 4rem, also used as `scroll-padding-top` so anchors are not hidden under the sticky header.
- Section padding: `--space-8`, `--space-9` from 768px.

## Breakpoints

| Width | Changes                                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| 640px | Gallery and highlights go to 2 columns; hero facts go to 3 columns                                          |
| 768px | Larger type tokens and gutter; footer goes to 3 columns                                                     |
| 900px | Desktop nav replaces the menu toggle; programme rows become a 5-column table-like grid                      |
| 960px | Hero copy and arch side by side; About copy and photo side by side; gallery 4 columns; highlights 3 columns |

## Components and states

| Component           | Where                     | States                                                                                                                      |
| ------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `.button`           | `base.css`, hero CTA      | default, hover (marigold-soft, arrow nudges 3px), active (1px press), focus-visible                                         |
| `.text-link`        | `base.css`                | default (40% underline), hover (full underline), focus-visible                                                              |
| `SectionHeading`    | `src/components/`         | eyebrow, title, optional lede                                                                                               |
| `Icon`              | `src/components/Icon.tsx` | decorative only (`aria-hidden`)                                                                                             |
| Header and nav      | `Header.tsx`              | active link (`aria-current`), mobile menu open or closed; Escape and outside click close it and focus returns to the toggle |
| Season notice       | `Hero.tsx`                | upcoming (countdown, `role="timer"`), live (pulsing dot), tonight or up next, concluded                                     |
| Programme night row | `Programme.tsx`           | `data-state`: `done` (dimmed), `live`, `next` (highlighted), `scheduled`                                                    |
| Gallery tile        | `Gallery.tsx`             | lazy-loaded image with fixed width and height to avoid layout shift                                                         |
| Contact channel     | `Footer.tsx`              | label and value link; external links open in a new tab with `noopener noreferrer`                                           |
| Skip link           | `App.tsx`                 | hidden until focused                                                                                                        |

There are no forms, selects, dialogs, or tooltips. If one is added, build a custom accessible component (no native `alert`, `select`, `title` tooltip, or validation bubble).

## Icons

One set: stroke icons adapted from Lucide (ISC licence) in `src/components/Icon.tsx`, 24px grid, 1.75 stroke, `currentColor`. Names: crown, calendar, pin, clock, ticket, menu, close, arrowRight, arrowUpRight. Brand logos for contact channels are separate SVGs in `public/Social/`.

## Motion

- Easing `--ease` (`cubic-bezier(0.2, 0.7, 0.2, 1)`), 0.2s for hovers, presses, and the mobile menu entrance.
- `pulse` (1.6s) marks the live state only.
- Smooth anchor scrolling.
- `prefers-reduced-motion: reduce` disables smooth scrolling and shortens all animations and transitions to near zero.

## Accessibility

- Visible focus: 2px marigold outline, 3px offset, on `:focus-visible` only.
- Custom selection colour and themed scrollbars (`base.css`).
- Each section is labelled by its heading via `aria-labelledby`.
- Icons are hidden from assistive tech; external links carry hidden "(opens map)" text where the destination is not obvious.
- Images carry descriptive alt text from `src/content/gallery.ts`.

## Copy and terminology

- "Programme" for the schedule (nav label and heading); its URL fragment stays `#Schedule` because fragments are public URLs.
- Status labels: "First curtain in", "On stage now", "Tonight", "Up next", "Season concluded". Use the same words wherever a night's state is shown.
- Primary action: "View the programme".
- Indian English spelling (organised, programme, colour).

## Decisions

- **Sections, not cards.** Content is separated by alternating backgrounds; cards are not used.
- **Status in the hero.** Visitors mostly need tonight's information, so the live season status sits beside the dates instead of lower on the page.
- **Fixed image dimensions.** Every image has `width` and `height` so the layout does not shift as images load.
- **One primary action.** The hero has a single button; everything else is a text link.
