# Mentor Exercise: Missions Feature Code Review

## Context

A student has submitted their work on the **Missions feature** for the Moonbase Control application.

The submission covers:

- Missions list page (`/missions`)
- Mission detail page (`/missions/:id`)
- `MissionsService` for API access
- Feature routing configuration

The student claims the feature is complete and ready for review.

## Your Task

Review the student's Missions implementation as you would in a real mentorship session. Focus on **Angular-specific architecture, reactivity, routing, and data access** — not general frontend advice.

## Scope

Review only:

- `src/app/features/missions/**`
- `src/app/features/missions/missions.routes.ts`

**Out of scope:**

- Dashboard, navigation, and shared components (provided as working context)
- CSS polish unless it reflects an Angular architectural problem
- Suggesting NgRx or other state libraries

## Baseline Expectations

The course teaches modern Angular patterns:

- Standalone components
- `inject()` for dependency injection
- Signals (`signal`, `computed`, `toSignal`, `rxResource`)
- Control flow syntax (`@if`, `@for`, `@switch`)
- Feature-based architecture with lazy loading
- Typed HTTP services with domain mapping

## Repository Setup

Copy this repository to your GitHub account:

1. Go to [Your repositories](https://github.com?tab=repositories)
2. Click **New**
3. Choose **Import a repository**
4. Insert `https://github.com/JanPietrzynski/moonbase-exercise.git`
5. Make your cloned repository **public**

**Do not fork repositories.**

The test task repository contains two branches:

- `master` — baseline application (dashboard, navigation, shared components)
- `solution-to-review` — student submission to review

After importing, open a Pull Request from `solution-to-review` into `master`.

## How to Run the App

```bash
npm run api   # Terminal 1 — mock API on port 3000
npm start     # Terminal 2 — app on port 4200
```

**Branch behavior:**

- On **`master`**: the dashboard loads and mission statistics render, but the `/missions` route is not yet implemented — clicking **Missions** in the nav returns a 404.
- On **`solution-to-review`** (or after opening the PR): the full missions feature is available. Use the manual test flow below, including the snapshot routing bug reproduction from the answer key (Artemis → back → Lunar Habitat shows stale Artemis data).

Suggested manual test flow:

1. Open the Dashboard — confirm mission statistics load
2. Navigate to **Missions** — confirm the list renders
3. Open a mission detail page
4. Navigate to a **different** mission from the list (without full page reload)
5. Optionally: stop the API and observe error behavior

## Deliverable

Perform a **GitHub Pull Request code review** — the same outcome you would produce for a real student submission.

Submit:

1. **Link to your public repository**
2. **Link to the Pull Request** where you completed the review

### What your review must include

**Inline comments** on specific lines within the review scope. Each comment should explain:

- What the issue is
- Why it matters in Angular terms
- What the student should do instead

**A review summary** submitted via GitHub's review UI (**Finish your review**) containing:

- Overall verdict: **Approve**, **Comment**, or **Request changes**
- Critical issues that must be fixed before merge
- 2–3 things the student did well
- One topic you would pair on in the next mentorship session

### Review workflow

After importing the repository:

1. Open the Pull Request from `solution-to-review` into `master`  
   (If no PR exists yet, create one: base `master`, compare `solution-to-review`)
2. Go to **Files changed**
3. Click **Review changes** → leave inline comments on specific lines
4. Submit your review with the summary above

Do not push code fixes — this is a review-only exercise.

## Constraints

- Prefer modern Angular APIs over legacy patterns (`*ngIf`, constructor DI, `ngOnInit` subscriptions)
- Feedback should be **actionable for a student** — explain what to change and what pattern to use instead
- Prioritize issues by learning impact, not personal style preferences
