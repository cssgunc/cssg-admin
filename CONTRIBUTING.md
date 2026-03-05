# Contributing to cssg-admin

This runbook describes how to contribute to the repository when working from Linear tickets. Following these steps keeps branches tidy, ensures quality checks pass, and links your work to the right issue.

---

## Prerequisites

- **Bun** installed ([bun.sh](https://bun.sh))
- Access to the repository and (for PRs) the default branch
- A Linear ticket you’re implementing (e.g. `CSSG-12`)

---

## Step 1: Start from an up-to-date `main`

```bash
git checkout main
git pull origin main
```

Always branch from the latest `main` so your changes don’t conflict with others’ work.

---

## Step 2: Create a descriptive branch

Use a **three-word, hyphen-separated** branch name that summarizes the work (no issue code here; that goes in the PR title).

**Examples:**

| Linear ticket                       | Branch name examples                                      |
| ----------------------------------- | --------------------------------------------------------- |
| CSSG-12 (public pages + global nav) | `public-pages-global-nav` or `global-navbar-public-pages` |
| CSSG-13 (login, signup, onboarding) | `login-signup-onboarding` or `auth-onboarding-flow`       |

```bash
git switch -c your-three-word-branch-name
```

---

## Step 3: Do your changes

- Implement the acceptance criteria from the Linear ticket.
- Prefer small, focused commits (e.g. one logical change per commit).
- If the ticket references Figma or a design doc, keep that open for reference.

---

## Step 4: Lint, format, and test

From the **repository root**, run:

```bash
# Lint all workspaces (frontend, backend, shared)
bun run lint:all

# Format all workspaces (writes formatted files)
bun run format:all

# Verify formatting (CI-style check; must pass for clean CI)
bun run format:check:all

# Run all tests
bun run test:all
```

Fix any failures before pushing. Optional: run only the parts you changed:

- `bun run lint:frontend` / `lint:backend` / `lint:shared`
- `bun run format:frontend` / `format:backend` / `format:shared`
- `bun run test:backend` / `test:shared`

---

## Step 5: Push your branch

```bash
git push -u origin your-three-word-branch-name
```

Use the same branch name you created in Step 2.

---

## Step 6: Open a PR linked to Linear

Create a Pull Request with a title in this form so Linear can link it to the issue:

```
[ISSUE-CODE]: Short description of the change
```

**Examples:**

- `[CSSG-12]: Add global navbar and public pages (Home, About, Contact, Projects)`
- `[CSSG-13]: Add login, signup, and onboarding flow with Figma-aligned UI`

Use the **exact** issue identifier (e.g. `CSSG-12`, `CSSG-13`). Linear will then show the PR on the issue and vice versa.

When you open a PR, GitHub will pre-fill the body from the [PR template](.github/PULL_REQUEST_TEMPLATE.md). Fill in the **Issue** (Linear ticket code), a short **Summary**, and any **How to verify** steps for reviewers. You can also add "Closes ISSUE-CODE" or note follow-ups in the description.

---

## Quick reference

| Step | Action                                                                                      |
| ---- | ------------------------------------------------------------------------------------------- |
| 1    | `git checkout main && git pull origin main`                                                 |
| 2    | `git checkout -b three-word-branch-name`                                                    |
| 3    | Implement the ticket                                                                        |
| 4    | `bun run lint:all` → `bun run format:all` → `bun run format:check:all` → `bun run test:all` |
| 5    | `git push -u origin three-word-branch-name`                                                 |
| 6    | Open PR with title `[ISSUE-CODE]: description`                                              |

---

For more on the monorepo (workspaces, shared package, tooling), see the main [README.md](./README.md).
