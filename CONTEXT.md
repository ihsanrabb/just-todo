# Context

## Project

`just-todo` is a simple to-do app that works. It is a client-side single-page
app — no backend, no accounts, data lives on the device.

## Tech stack

| Piece | Role |
| --- | --- |
| React (JSX, no TypeScript) | UI |
| Vite | dev server and production build |
| pnpm | package manager |
| Biome | formatting and import organization |
| ESLint | linting (React hooks, fast-refresh rules) |
| husky + commitlint | pre-commit formatting, Conventional Commits enforced |
| Plain CSS | styling — no framework, no preprocessor, no CSS-in-JS |

## Performance is a first-class constraint

This app should feel instant. Treat these as rules, not suggestions:

- Keep the dependency budget near zero. Every new runtime dependency needs a
  reason that a few lines of our own code can't cover.
- Prefer local component state and derived values over global stores.
- Persist locally — `localStorage`, or IndexedDB if the list outgrows it. Never
  put the network on the critical path. Debounce writes; don't write per
  keystroke.
- Keep list rendering cheap: stable keys, the todo item as its own component,
  and memoization only where a render is measurably hot.
- Animate `transform` and `opacity` only. Never animate layout properties.
- Ship a small bundle. Lazy-load anything non-essential and keep first paint
  free of blocking work.
- Measure before optimizing. Profile, don't guess.

## Styling: plain CSS only

No Tailwind, no Sass, no CSS-in-JS, no UI kits.

- CSS custom properties on `:root` are the token layer — colors, fonts,
  shadows, spacing.
- Use native CSS nesting.
- One `.css` file per component, imported by that component.
- Dark mode is a `prefers-color-scheme` override of the tokens, not a second
  set of rules.

## Mobile-first design

- Base styles target the smallest viewport. Layer up with
  `@media (min-width: …)` only — never `max-width` queries.
- Touch targets are at least 44px.
- Widths are fluid with a `max-width` cap, not fixed.
- Use `svh` units over `vh`.

## Conventions

- `src/` for source, `src/assets/` for imported assets, `public/` for files
  served as-is.
- Components use the `.jsx` extension.
- Formatting is Biome's job — don't hand-format, and don't argue with it.
- Commit messages follow Conventional Commits.
