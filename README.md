# Agile Coach Learning Hub

An interactive educational website about Agile coaching, coaching principles,
facilitation, team dynamics, conflict resolution, and continuous improvement.

Built with React, TypeScript and Tailwind CSS, bundled with Vite.

🚀 **Live Demo:** [mds-agile-coach.netlify.app](https://mds-agile-coach.netlify.app/)

## Requirements

- [Node.js](https://nodejs.org/) 22 or newer

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000. The page reloads when you save a file.

## Run tests

```
npm test
```

This uses Node's built-in test runner (with `tsx` so tests can read the
TypeScript data files). Test files live in `tests/` and end in `.test.js`.
Run the tests before asking for a review.

## Build and deploy

```
npm run build
```

The site is built into `dist/`. Netlify deploys automatically from `main`
(build command `npm run build`, publish directory `dist`). Every pull request
to `main` gets its own Deploy Preview link.

## Project structure

```
index.html              Page shell: React renders into <div id="root">
src/main.tsx            Entry point
src/App.tsx             Page layout: the list of sections
src/components/         One component per section (Hero, Role Matrix, Stances, Conflict, Quiz…)
src/data/               Learning content: roles, stances, conflict levels, quiz questions
src/types/              TypeScript types for the content
tests/                  Automated tests
docs/                   Project documents: research, Design Thinking, release plan, minutes
```

To change the learning content, edit `src/data/agileCoachData.ts`.

## Secrets

Never commit API keys or tokens. `.env` files are ignored by Git.
