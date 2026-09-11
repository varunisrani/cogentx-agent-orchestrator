# CogentX Agent Orchestrator

CogentX Agent Orchestrator is a Vite-powered product-site prototype presenting a Model Context Protocol-based vision for building and coordinating specialized AI agents.

## Core features

- Responsive single-page product site with hero, features, information, and footer sections.
- Presentation of compliance, data, custom, legal, and marketing agent categories.
- Explanation of MCP concepts and multi-agent collaboration.
- Example workflow for a football highlights creator agent.
- Client-side routing with a custom not-found page.
- Reusable shadcn-style UI component collection.

## Technology stack

- Vite 5, React 18, and TypeScript
- React Router and TanStack Query
- Tailwind CSS and Radix UI primitives
- shadcn-style components, Lucide icons, and Sonner notifications
- ESLint 9

## Prerequisites

- Node.js and npm

## Local setup

```bash
git clone https://github.com/varunisrani/cogentx-agent-orchestrator.git
cd cogentx-agent-orchestrator
npm ci
npm run dev
```

Vite prints the local development URL when it starts.

Build, preview, and lint commands:

```bash
npm run build
npm run preview
npm run lint
```

For a development-mode build, run `npm run build:dev`.

## Configuration

No environment variables are referenced by the application source.

## Project structure

- `src/main.tsx` — browser entry point.
- `src/App.tsx` — providers and route definitions.
- `src/pages/` — landing and not-found pages.
- `src/components/` — product-site sections and reusable UI components.
- `src/hooks/` and `src/lib/` — shared hooks and utilities.
- `public/` — static assets.
- `vite.config.ts` and `tailwind.config.ts` — build and styling configuration.

## Status and limitations

This is a static product presentation. It does not implement agent creation, orchestration, MCP connectivity, model calls, monitoring, authentication, or persistence. Calls to action are visual and no backend/API integration is present. No automated test script is defined.