# CONTEXT

## Purpose

This repository contains a browser-based Spanish reading-comprehension practice app.

It was originally shaped around prompt files for an AI-guided flow, but it has since been converted into a standard web application that runs in the browser and is served by a Node.js + Express backend.

The goal is practice only. The tests are not intended to exactly match official exams.

## Current Product Shape

- 20 tests total
- 10 periodistic/journalistic tests: `PER1` to `PER10`
- 10 academic/educational tests: `EDU1` to `EDU10`
- difficulty increases by level
- texts are shown first
- questions are answered one by one
- feedback is immediate after each answer
- final result includes score, diagnosis, strengths, common errors, and a recommendation

The app always starts with an introductory message before the catalog.

## Tech Stack

- Node.js
- Express
- vanilla HTML/CSS/JS frontend
- question banks stored in CommonJS modules
- optional PostgreSQL analytics
- `pm2` used in production
- Nginx reverse proxy exists outside this repo

## Repository Structure

- `public/`
  - browser UI
  - `app.js` manages state, flow, rendering, and analytics calls
  - `index.html` and `styles.css` provide the frontend shell
- `server/`
  - `index.js`: Express server and API endpoints
  - `data.js`: loads tests and text metadata
  - `analytics.js`: PostgreSQL analytics layer
  - `question-banks/`: question-bank source files and loader
- `texts/PER/`
  - journalistic texts
- `texts/EDU/`
  - academic texts
- `README.md`
  - user/developer setup information
- `.env.example`
  - environment variable template

## Content Model

Each test includes:

- code, e.g. `PER4`, `EDU7`
- category and level
- title
- paragraphs
- questions

Each question includes:

- `id`
- `prompt`
- `options`
- `correctOptionIndex`
- `explanation`
- `tip`
- `topics`
- sometimes `isTricky`

Question sets can have 4 or 5 options.

Some questions include one special option, such as:

- `Todas las anteriores`
- `Ninguna de las anteriores`
- combinations like `A y C`

Only one special option is allowed per question.

## Text and Difficulty Calibration

The text corpus was rewritten and recalibrated so that:

- level 1 texts remain the shortest baseline
- higher levels are progressively longer
- level 10 texts were expanded significantly
- question counts also increase by level

Current suggested question counts in the app:

- level 1: 7
- level 2: 10
- level 3: 12
- level 4: 15
- level 5: 17
- level 6: 20
- level 7: 22
- level 8: 25
- level 9: 27
- level 10: 30

## Frontend Flow

The browser app flow is:

1. Intro screen
2. Test catalog
3. Reading screen
4. Guided question-by-question flow
5. Final summary/result screen

Main frontend state lives in `public/app.js`.

Important frontend behaviors:

- accessible announcement area via `aria-live`
- confirmation before abandoning an in-progress attempt
- immediate correction after each answer
- result summary built dynamically from actual answers
- optional analytics calls are non-blocking, so the app still works if analytics fails

## Backend API

### Public endpoints

- `GET /api/config`
- `GET /api/tests`
- `GET /api/tests/:code`

### Analytics endpoints

These are active only when analytics is enabled:

- `POST /api/attempts`
- `POST /api/attempts/:attemptId/events`
- `POST /api/attempts/:attemptId/complete`
- `POST /api/attempts/:attemptId/abandon`

### Admin analytics endpoints

These require a Bearer token via `ADMIN_API_TOKEN`:

- `GET /api/admin/attempts`
- `GET /api/admin/attempts.csv`
- `GET /api/admin/attempts/:attemptId/events`

## PostgreSQL Analytics

Analytics is implemented but optional.

If `DATABASE_URL` is not configured:

- the app still works normally
- analytics endpoints return disabled behavior
- `analyticsEnabled` appears as `false` in `/api/config`

If `DATABASE_URL` is configured:

- schema is auto-created on startup
- attempt and event logging is enabled

Tables created automatically:

- `analytics_attempts`
- `analytics_events`

Stored analytics includes:

- test code
- category
- level
- status
- timestamps
- result summary
- detailed event stream
- hashed IP
- user agent
- referer

Important privacy note:

- raw IPs are not stored
- the app stores a SHA-256 hash of the IP using `ANALYTICS_IP_SALT`

## Required / Relevant Environment Variables

- `PORT`
- `DATABASE_URL`
- `ANALYTICS_IP_SALT`
- `DATABASE_SSL`
- `ADMIN_API_TOKEN`

Secrets and tokens must not be committed to the repository.

## Answer Position Rebalancing

There was a quality issue where too many questions in some tests had the correct option in the same position, especially `B`.

This was fixed in `server/question-banks/index.js`.

Important implementation detail:

- the raw question-bank content files are not manually rewritten for this
- instead, the loader reorders options when assembling the exported `QUESTION_BANKS`
- special options like `A y C` are recalculated after reordering so they still refer to the correct letters

This keeps the source banks more maintainable while improving served distribution.

The current app now serves more balanced correct-answer positions across all 20 tests.

## Current Production / Deployment Knowledge

### App VM

There is a production VM running the app on:

- host: `137.184.70.174`
- app path: `/home/test/test_comp_lecto`
- app process name in `pm2`: `test-comp-lecto`

### Reverse Proxy

There is also a separate Nginx host that proxies the public domain to the app VM.

Known public domain:

- `lecto.jasperpay.io`

### Current production state known at the time of writing

- production was pulled and restarted after the latest answer-position rebalance
- the live process is online in `pm2`
- the latest deployed rebalance commit is:
  - `ae21785` `Rebalance answer positions across test banks`
- production analytics code is deployed
- production analytics is not necessarily active unless environment variables for PostgreSQL were configured on the VM

At the last direct server check:

- the app was responding correctly
- `analyticsEnabled` was `false` on production

That means the PostgreSQL feature is present in code and deployed, but actual live logging still depends on runtime env configuration.

## Important Recent Commits

Known recent commits:

- `ae21785` `Rebalance answer positions across test banks`
- `3bc9f7d` `Add PostgreSQL analytics and retire legacy prompt assets`
- `d87b8f9` `Build browser-based reading practice app and refresh test content`

## Legacy Files Removed

The project no longer depends on the old AI-prompt workflow files.

These legacy prompt-era assets were removed from the repo:

- `MASTER_PROMPT.txt`
- `PER1_PROMPT.txt`
- `system/prompt.txt`
- `push_to_github.sh`
- old `server/questionBanks.js`

The app now depends on the browser frontend and the modular question-bank loader under `server/question-banks/`.

## Verification Already Performed

Known verification completed during development:

- syntax checks with `node --check`
- lint checks on edited files
- local app endpoint checks
- local temporary PostgreSQL smoke test for:
  - attempt creation
  - event logging
  - completion logging
  - admin JSON listing
  - CSV export
  - attempt event retrieval
- production VM pull/restart verification

## Things To Remember

- do not store secrets in the repo
- if analytics is to be activated in production, set:
  - `DATABASE_URL`
  - `ANALYTICS_IP_SALT`
  - `ADMIN_API_TOKEN`
- after env changes in production, restart with environment refresh, e.g. via `pm2`
- if question ordering or answer distribution is reviewed again, the balancing logic lives in `server/question-banks/index.js`

## Suggested Next Operational Step

If full production analytics is desired, the next step is:

1. provision or connect a PostgreSQL database for production
2. configure the env vars on the production VM
3. restart the app with updated env
4. verify a real attempt writes rows into PostgreSQL
