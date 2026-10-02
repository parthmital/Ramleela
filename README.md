# Chembur Ramleela Website

Official website for the Chembur Ramleela, organised by the Shree Maryada Purushottam Ramleela Samiti at Gandhi Maidan, Chembur, Mumbai, since 1994. Live at [chemburramleela.com](https://chemburramleela.com/).

It is a single-page React app. It shows the season dates and venue, a live season status (countdown, the night on stage, or season concluded), the nightly programme, highlights, a photo gallery, and contact and donation details. There is no backend, API, database, or user input; all content ships in the static bundle.

## Contents

- [Quick start](#quick-start)
- [Technology stack](#technology-stack)
- [Repository structure](#repository-structure)
- [Scripts](#scripts)
- [Updating for a new season](#updating-for-a-new-season)
- [Testing and code quality](#testing-and-code-quality)
- [Continuous integration](#continuous-integration)
- [Build and deployment](#build-and-deployment)
- [Troubleshooting](#troubleshooting)
- [Further documentation](#further-documentation)

## Quick start

Prerequisite: Node.js 24 (pinned in `.nvmrc`) with npm. No environment variables are needed.

Run these from the repository root:

1. Install the exact locked dependencies:

   ```bash
   npm ci
   ```

   Expected result: a `node_modules/` folder with no errors. If npm reports an engine or syntax error, check `node --version` prints `v24.x`.

2. Start the development server:

   ```bash
   npm run dev
   ```

   Expected result: Vite prints a local URL, by default `http://localhost:5173`. Open it in a browser. If port 5173 is busy, Vite picks the next free port and prints it.

## Technology stack

| Technology                                  | Version (from `package.json`) | Purpose and where it is used                                                                                      |
| ------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| React and React DOM                         | ^19.1.0                       | Renders the page from `src/main.tsx` and the components in `src/sections/` and `src/components/`.                 |
| TypeScript                                  | ~5.8.3                        | Type-checks all source; `npm run build` runs `tsc -b` before bundling.                                            |
| Vite                                        | ^8.3.1                        | Dev server and production bundler. A custom plugin in `vite/eventHtml.ts` fills the HTML head at build time.      |
| @fontsource/tiro-devanagari-hindi and mukta | ^5.3.0                        | Self-hosted display and body fonts, imported in `src/main.tsx`, so no third-party font request is made.           |
| Vitest                                      | ^5.0.2                        | Unit tests for time logic (`src/programme/season.test.ts`) and the build plugin (`vite/eventHtml.test.ts`).       |
| ESLint (flat config) with typescript-eslint | ^10.11.0                      | Linting, configured in `eslint.config.js`. It also blocks React imports from `src/content/` and `src/programme/`. |
| Prettier                                    | ^3.6.2                        | Formatting, configured in `.prettierrc.json`.                                                                     |

Styling is plain CSS: design tokens in `src/styles/tokens.css`, a reset and shared primitives in `src/styles/base.css`, and one stylesheet per component.

## Repository structure

```text
.
|-- index.html              HTML shell; %TOKENS% are filled from src/content at build time
|-- vite.config.ts          Vite and Vitest config
|-- vite/eventHtml.ts       Build plugin: head tokens, JSON-LD structured data, CSP meta tag
|-- src/
|   |-- main.tsx            Entry point: fonts, global styles, mounts <App>
|   |-- App.tsx             Page composition and deep-link scrolling
|   |-- content/            Event facts and copy (pure data, no React)
|   |-- programme/          Pure date and time logic for the season status
|   |-- hooks/              Clock and active-section hooks
|   |-- components/         Shared UI pieces (Icon, SectionHeading)
|   |-- sections/           One component and stylesheet per page section
|   `-- styles/             tokens.css and base.css
|-- public/                 Images, social icons, favicon, og.png, robots.txt, sitemap.xml
`-- .github/                CI workflow and Dependabot config
```

Module rules and where new code goes are in [ARCHITECTURE.md](ARCHITECTURE.md).

## Scripts

| Command                | What it does                                                         |
| ---------------------- | -------------------------------------------------------------------- |
| `npm run dev`          | Starts the Vite dev server with hot reload.                          |
| `npm run build`        | Type-checks with `tsc -b`, then builds the static site into `dist/`. |
| `npm run preview`      | Serves the `dist/` build locally. Run `npm run build` first.         |
| `npm test`             | Runs the Vitest unit tests once.                                     |
| `npm run lint`         | Lints all TypeScript files with ESLint.                              |
| `npm run format`       | Rewrites files with Prettier.                                        |
| `npm run format:check` | Checks formatting without changing files.                            |
| `npm run check`        | Runs format check, lint, tests, and build in order. CI runs this.    |

## Updating for a new season

All event facts live in `src/content/`. The page copy, HTML title and meta tags, and schema.org structured data are all generated from these files.

1. `src/content/event.ts`: set `season`, and update contact or venue details if they change.
2. `src/content/programme.ts`: set each night's date, start and end time (24-hour IST; an end at or before the start runs past midnight), title, episode, and tag.
3. `public/sitemap.xml`: update `lastmod`.
4. Run `npm run check`.

The hero and programme switch automatically between countdown, "On stage now" or "Tonight", and "Season concluded" based on the programme times.

## Testing and code quality

| Metric                  | Value                                   | Source                                                   |
| ----------------------- | --------------------------------------- | -------------------------------------------------------- |
| Test files              | 2                                       | `vite.config.ts` test include patterns                   |
| Test cases              | 17 (12 + 5)                             | `src/programme/season.test.ts`, `vite/eventHtml.test.ts` |
| Code coverage           | Not measured in the current repository. | No coverage tool is configured.                          |
| Page sections           | 7                                       | `src/sections/*.tsx`                                     |
| Programme nights (2025) | 11                                      | `src/content/programme.ts`                               |

Run everything CI runs with `npm run check`.

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and on every pull request:

- **check:** `npm ci`, `npm run check`, then `npm audit --audit-level=moderate` (10 minute timeout).
- **secrets:** gitleaks scan of the full Git history (5 minute timeout).

To reproduce CI locally, run `npm ci && npm run check && npm audit --audit-level=moderate`.

The repository stores text files with LF line endings (see `.gitattributes`), so the Prettier check behaves the same on Windows as in CI.

Dependabot (`.github/dependabot.yml`) opens weekly npm and monthly GitHub Actions update PRs. Minor and patch development-tool updates are grouped into one PR; each major bump gets its own PR because majors can break config. Merge an update PR only after CI passes on it.

## Build and deployment

`npm run build` outputs a static site to `dist/`, which can be hosted on any static host at the domain root. Deployment is not automated in this repository.

A Content Security Policy is injected into the built `index.html` as a meta tag. Meta tags cannot set every header, so if the host supports response headers, also set:

```text
Content-Security-Policy: frame-ancestors 'none'
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Troubleshooting

| Problem                                            | Likely cause                                     | Diagnostic                    | Resolution                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm ci` fails or tools behave oddly               | Wrong Node.js version                            | `node --version`              | Install Node.js 24, as in `.nvmrc`.                                                                                                          |
| `format:check` fails on every file in an old clone | Files checked out with CRLF line endings         | `git ls-files --eol`          | Commit or stash changes, then from Git Bash run `git ls-files -z \| xargs -0 rm -f && git checkout -- .`. This discards uncommitted changes. |
| Images load locally but 404 in production          | Path case mismatch on a case-sensitive host      | Check the path in the browser | Use `Images/` with a capital I, matching `public/Images/`.                                                                                   |
| Season status shows the wrong night                | Wrong date or time in `src/content/programme.ts` | `npm test`                    | Fix the entry; times are IST wall-clock, and an end at or before the start means past midnight.                                              |
| Inline script blocked in `npm run preview`         | The production CSP allows only `'self'` scripts  | Browser console               | Do not add inline scripts; load code through `src/`.                                                                                         |

## Further documentation

- [ARCHITECTURE.md](ARCHITECTURE.md): module map, dependency rules, decisions, and growth signals.
- [DESIGN.md](DESIGN.md): palette, type, layout, components, motion, and copy rules.
