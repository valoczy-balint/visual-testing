# Intro

This is a simple project to test Percy with Cypress. It uses a modernized version of the Angular Tour of Heroes tutorial (https://github.com/markmals/angular-tour-of-heroes-modernized) as a test target.

# Requirements

- Node.js
- npm
- Percy account + App + token (https://percy.io/)

# Run

## Frontend

```bash
  cd frontend
  npm i
  npm run dev
```

## Tests

```bash
  cd tests
  npm i
  npmx percy exec -- cypress run
```

# Pricing

Cypress: Free
Percy: Free for 5,000 snapshots per month.

