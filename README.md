# Monorepo

This repository is a **Bun workspace** monorepo containing shared packages and deployable applications.

## Architecture

```
workspace/
├── apps/
│   ├── frontend/     # Next.js 16 app (React 19, Tailwind)
│   └── backend/       # Hono API (Bun runtime)
├── packages/
│   └── shared/        # @cssg/shared – shared code (TS, used by frontend & backend)
├── package.json       # Root workspace config and scripts
├── tsconfig.base.json # Shared TypeScript base config
├── eslint.config.mjs # Root ESLint (backend + packages; frontend has its own)
└── .prettierrc        # Shared Prettier config (Tailwind plugin)
```

### Workspaces

| Path              | Package name   | Purpose |
|-------------------|----------------|---------|
| `apps/frontend`   | `frontend`     | Next.js app (React, Tailwind). Depends on `@cssg/shared`. |
| `apps/backend`    | `backend`      | Hono HTTP API run with Bun. Depends on `@cssg/shared`. |
| `packages/shared` | `@cssg/shared` | Shared TypeScript utilities/types. No app-specific deps. |

- **Root** `package.json` defines `"workspaces": ["packages/*", "apps/*"]`. Dependencies are hoisted where possible.
- **Shared code**: Add types, utils, or constants in `packages/shared` and depend on it with `"@cssg/shared": "workspace:*"` in an app’s `package.json`, then run `bun install` from the repo root.
- **TypeScript**: All packages extend `tsconfig.base.json`; apps add their own options (e.g. Next.js in frontend, Hono in backend).
- **Linting**: Root ESLint covers backend and `packages/shared`; `apps/frontend` uses its own ESLint config (Next.js + Prettier).
- **Formatting**: Prettier is configured at root (with Tailwind plugin); each app/package has `format` and `format:check` scripts.

---

## Basic commands

Run these from the **repository root** unless noted.

### Development

| Command           | Description |
|-------------------|-------------|
| `bun run dev:all` | Start all workspaces that have a `dev` script (frontend + backend). |
| `bun run dev:frontend` | Start only the Next.js app (`apps/frontend`). |
| `bun run dev:backend`  | Start only the Hono backend (`apps/backend`). |

From a single app:

- `cd apps/frontend && bun run dev` – Next.js dev server.
- `cd apps/backend && bun run dev` – Backend with Bun hot reload.

### Linting

| Command              | Description |
|----------------------|-------------|
| `bun run lint:all`    | Run `lint` in every workspace that defines it. |
| `bun run lint:frontend` | Lint frontend (Next.js ESLint config). |
| `bun run lint:backend`  | Lint backend (root ESLint config). |
| `bun run lint:shared`   | Lint `@cssg/shared` (root ESLint config). |

### Formatting (Prettier)

| Command               | Description |
|-----------------------|-------------|
| `bun run format:all`  | Run `format` in every workspace (writes formatted files). |
| `bun run format:check`| Check formatting for the whole repo (CI-friendly; no write). |
| `bun run format:frontend` | Format only `apps/frontend`. |
| `bun run format:backend`  | Format only `apps/backend`. |
| `bun run format:shared`   | Format only `packages/shared`. |

### Tests

| Command             | Description |
|---------------------|-------------|
| `bun run test:all`  | Run `test` in every workspace that defines it. |
| `bun run test:backend` | Run backend tests. |
| `bun run test:shared`  | Run shared package tests. |

From a single app/package:

- `cd apps/backend && bun test`
- `cd packages/shared && bun test`

---

## Adding the shared package to an app

1. In the app’s `package.json`, add:
   ```json
   "@cssg/shared": "workspace:*"
   ```
   (e.g. under `dependencies`).
2. From the repo root, run:
   ```bash
   bun install
   ```
3. Import in code, e.g.:
   ```ts
   import something from "@cssg/shared";
   ```

Do **not** use `bun add @cssg/shared` from the app directory; that will try to install from npm. Use the `workspace:*` dependency and `bun install` at root.

---

## Tooling summary

| Tool        | Scope | Config |
|------------|--------|--------|
| **Bun**    | Install, run scripts, run backend | Root + per-package `package.json` |
| **TypeScript** | All packages | `tsconfig.base.json` + per-package `tsconfig.json` |
| **ESLint** | Backend + shared (root); frontend (own) | Root `eslint.config.mjs`; `apps/frontend/eslint.config.mjs` |
| **Prettier** | Whole repo | Root `.prettierrc` (Tailwind plugin), `.prettierignore` |
