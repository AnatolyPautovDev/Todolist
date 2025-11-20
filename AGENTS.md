# Repository Guidelines

## Architecture & Modules
- Vite + React + TypeScript with Redux Toolkit state. Entry `src/main.tsx` renders `src/app/App.tsx`, which applies theme and hosts `Main.tsx`.
- Global wiring lives in `src/app`: Redux store in `store.ts`, layout/styles in `App.css` and `index.css`, selectors in `app-selectors.ts`.
- Domain code is `src/features/Todolists`: `model` (reducers, selectors, `_tests`), `ui` (feature components such as `Todolists`, modals, search), and `api` reserved for data calls.
- Shared pieces sit in `src/common` (hooks like typed selectors/dispatch, base components, styling helpers). Static files live in `src/assets`; `public` serves build-time assets.
- Path alias `@/` maps to `src/` (see `tsconfig.app.json`) to keep imports short.

## Key Dependencies
- React 19, React DOM, Redux Toolkit, React Redux.
- Tooling: Vite (dev/build/preview), TypeScript (strict, bundler resolution), ESLint with React Hooks/Vite refresh rules, Prettier, Vitest.

## Code Style & Accepted Practices
- Prettier: `printWidth` 120, semicolons off. Keep ASCII-only text and avoid wildcard exports.
- ESLint: follow recommended JS/TS + Hooks; resolve warnings before merge. Prefer `@/` imports over deep relatives.
- Typing: strict TS; avoid `any`. Use typed hooks and selectors for store access.
- Naming: PascalCase components, camelCase helpers, `use*` for hooks, action creators as verbs (`createTaskAC`), reducers/selectors under `model`, UI under `ui`.
- Styling: prefer CSS modules for scoping; keep global overrides limited to `src/app` styles.

## Making Changes & Adding Features
- UI/features: add components under `src/features/Todolists/ui/...`; wire feature entry points in `src/app/Main.tsx`.
- State: add actions/reducers/selectors in `src/features/Todolists/model`; register selectors for reuse and keep `store.ts` as the single reducer registry.
- Hooks/components shared across features go in `src/common`; expose typed hooks that target `AppDispatch` and `RootState` from `src/app/store`.
- Follow the alias and module boundaries; keep new globals minimal and prefer feature-first organization.
- Tests: place unit tests next to logic in `_tests` with `*.test.ts(x)` naming; use Vitest and Redux Toolkit helpers to keep tests deterministic.

## Build, Test, and Development Commands
- `pnpm install` — install deps.
- `pnpm dev` — run Vite dev server with HMR.
- `pnpm lint` — ESLint over TS/React.
- `pnpm build` — type-check (`tsc -b`) then build.
- `pnpm preview` — serve production build locally.
- `pnpm vitest` or `pnpm vitest --runInBand --coverage` — run tests and optional coverage.

## Commit & Pull Request Guidelines
- Use short, imperative subjects (<=72 chars) with scope hints (e.g., `todolists: add filter toggle`). Keep commits focused.
- PRs should include a brief goal, linked issue if present, UI screenshots/GIFs when visual changes occur, and confirmation that `pnpm lint`, `pnpm build`, and `pnpm vitest` ran cleanly.

## How to Use This File for Future Changes
- Treat this doc as the single place for conventions; update it when you adopt new patterns, tools, or testing expectations.
- Before starting work, skim the Architecture, Style, and Commands sections to align with current practice.
- When adding guidance, prefer concise rules with file paths and examples; avoid duplicating instructions elsewhere.
- If a rule is unclear during a change, clarify it here immediately so the next contributor inherits the decision.***
