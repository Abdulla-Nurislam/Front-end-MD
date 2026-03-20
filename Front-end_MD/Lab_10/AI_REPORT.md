# AI Usage Report (Lab 10: Testing and Deployment)

## AI Tool Information
- **Tool Used:** Antigravity (Powered by Google DeepMind)
- **Role:** AI Coding Assistant
- **Date:** March 20, 2026

## Objective
To implement a production-ready React application with robust unit testing (Jest/RTL) and an automated CI/CD pipeline (GitHub Actions/Vercel) as per the requirements of Week 10.

## Prompts Used
1. "Выполни это задание в соответствии критериям, и перепиши этот отчет об использовании ИИ чтобы он соответствовал теме lab_react_10_week10.pdf, запушь его в репозитории." (Initial User Request)

## Implementation Details
1. **Scaffolding:** Used the AI to initialize a Vite React project with TypeScript.
2. **Component Logic:** The AI followed the PDF specification to build the `TodoList` component with clear state management and `data-testid` attributes.
3. **Testing Suite:** Leveraged the AI to generate Jest tests that handle both synchronous (rendering, counter) and asynchronous (user interactions via `userEvent`) scenarios.
4. **Environment Fixing:** The AI proactively identified and resolved compatibility issues between Vite's ESM-first structure and Jest's traditional CommonJS environment by:
   - Configuring `ts-jest` for ESM.
   - Creating a custom `tsconfig.json` for Jest with the correct `jsx` and `module` flags.
   - Setting up `identity-obj-proxy` for CSS mapping.
5. **Deployment Pipeline:** Configured a multi-job GitHub Actions workflow (`ci.yml`) where the build job only runs after successful test passing, ensuring code quality before deployment.
6. **Production Optimisation:** Setup `terser` minification and manual chunk splitting in `vite.config.ts` for performance.

## Learnings & Observations
- **Unit Testing:** Learned that testing behavior (user interaction) is more robust than testing implementation details.
- **ESM vs CJS:** Encountered the "module resolution" complexities when using Jest with modern ESM-based Vite projects and learned how to resolve them via `ts-jest` configurations.
- **Deployment Strategy:** understood the importance of separating build and test jobs in CI/CD and why vendor splitting is critical for production performance.

## Signature
**Student:** Nurislam Abdulla
**Date:** 20.03.2026
