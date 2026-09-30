# Chembur Ramleela Website

Official website for the Chembur Ramleela, organised by the Shree Maryada Purushottam Ramleela Samiti at Gandhi Maidan, Chembur, Mumbai, since 1994. Live at [chemburramleela.com](https://chemburramleela.com/).

A single-page React app that shows the season's dates and venue, a live season status (countdown, the night on stage, or season concluded), the nightly programme, highlights, a photo gallery, and contact and donation details.

## Stack

- React 19, TypeScript, Vite 8
- Plain CSS with design tokens (`src/styles/tokens.css`), one stylesheet per component
- Self-hosted fonts via Fontsource: Tiro Devanagari Hindi (display) and Mukta (body)
- Vitest 5, ESLint 10 (flat config), Prettier

## Getting started

Requires Node.js 24 (see `.nvmrc`).

```bash
npm ci
npm run dev       # http://localhost:5173
```

## Scripts

| Script                            | What it does                                   |
| --------------------------------- | ---------------------------------------------- |
| `npm run dev`                     | Start the dev server                           |
| `npm run build`                   | Type-check and build to `dist/`                |
| `npm run preview`                 | Serve the production build locally             |
| `npm test`                        | Run unit tests                                 |
| `npm run lint`                    | Lint with ESLint                               |
| `npm run format` / `format:check` | Format or check formatting with Prettier       |
| `npm run check`                   | Format check, lint, tests and build (as in CI) |

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and on every pull request:

- **check:** `npm ci`, `npm run check`, then `npm audit --audit-level=moderate`
- **secrets:** gitleaks scan of the full Git history

To reproduce CI locally, run `npm ci && npm run check && npm audit --audit-level=moderate`.

The repository stores and checks out text files with LF line endings (see `.gitattributes`), so the Prettier check behaves the same on Windows as in CI. If an older clone shows formatting errors on every file, re-check out every tracked file from Git Bash with `git ls-files -z | xargs -0 rm -f && git checkout -- .`. This discards uncommitted changes, so commit or stash first.

Dependabot opens weekly npm and monthly GitHub Actions update PRs. Minor and patch development-tool updates are grouped into one PR; each major version bump gets its own PR, because majors can break config (for example, ESLint 10 needed `eslint-plugin-react-hooks` to use its flat preset). Merge an update PR only after CI passes on it.

## Updating for a new season

All event facts live in `src/content/`. The page copy, HTML title and meta tags, and schema.org structured data are all generated from these files.

1. `src/content/event.ts`: set `season`, and update contact or venue details if they change.
2. `src/content/programme.ts`: set each night's date, start and end time (24-hour IST; an end at or before the start runs past midnight), title, episode and tag.
3. `public/sitemap.xml`: update `lastmod`.
4. Run `npm run check`.

The hero and programme switch automatically between countdown, "on stage now" or "tonight", and "season concluded" based on the programme times.

## Deployment

`npm run build` outputs a static site to `dist/`, which can be hosted on any static host at the domain root.

A Content Security Policy is injected into the built `index.html` as a meta tag. If the host supports response headers, also set:

```
Content-Security-Policy: frame-ancestors 'none'
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Project structure

See [ARCHITECTURE.md](ARCHITECTURE.md).
