# Agile Coach Learning Hub

An interactive educational website about Agile coaching, coaching principles,
facilitation, team dynamics, conflict resolution, and continuous improvement.

Built with plain HTML, CSS, and JavaScript. There is no framework and no build step.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (only needed to run the tests)
- [VS Code](https://code.visualstudio.com/) with the **Live Server** extension (recommended for local preview)

## Run locally

1. Open the project folder in VS Code.
2. Right-click `index.html` and choose **Open with Live Server**.

Opening `index.html` directly in the browser works for now. Later stories use
JavaScript modules, which browsers block on `file://` URLs, so Live Server is
the recommended way to preview the site.

## Run tests

```
npm test
```

This uses Node's built-in test runner, so there is nothing to install. Test
files live in `tests/` and end in `.test.js`.

## Project structure

```
index.html        Home page
css/styles.css    Shared styles for all pages
tests/            Automated tests
```

## Secrets

Never commit API keys or tokens. `.env` files are ignored by Git.

🚀 **Live Demo:** [mds-agile-coach.netlify.app](https://mds-agile-coach.netlify.app/)

