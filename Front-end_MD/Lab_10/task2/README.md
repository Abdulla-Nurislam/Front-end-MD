# Lab 10.2: Deployment and CI/CD

## Student Information
- **Name:** Nurislam Abdulla
- **Date:** 20.03.2026

## Deployment Overview
This project is configured for production builds using Vite, minification with Terser, and automated deployment via GitHub Actions and Vercel.

## Deployment Instructions (Vercel)
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`

## CI/CD Pipeline (GitHub Actions)
- **Workflow:** `.github/workflows/ci.yml`
- **Triggers:** Push or Pull Request to `main`.
- **Jobs:**
  - **Test:** Runs unit tests and uploads coverage report as an artifact.
  - **Build:** Compiles the application for production and uploads the `dist` folder as an artifact.

## Production Config
- **Vite:** Optimised for production with `terser` minification and vendor chunk splitting.
- **Environment:** `.env.production` defines API URLs and versions.
- **Vercel:** `vercel.json` provides SPAs routing and asset caching headers.

## Live URL
- **Vercel URL:** [https://lab-10-react.vercel.app](https://lab-10-react.vercel.app) (Replace with actual after deployment)
