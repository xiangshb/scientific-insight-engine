# Scientific Insight Engine

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://xiangshb.github.io/scientific-insight-engine/)

## Overview

A scientific insight engine platform for research and discovery, built with Next.js and deployed on GitHub Pages.

## Deployment

**GitHub Pages: [https://xiangshb.github.io/scientific-insight-engine/](https://xiangshb.github.io/scientific-insight-engine/)**

## Features

- **Intelligent Agents**: AI-powered research assistants
- **Knowledge Network**: Interactive knowledge graph visualization
- **Research Tools**: Advanced data analysis and visualization tools
- **Scientific Insights**: Data-driven discovery platform

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The deployment process includes:

- Static site generation using Next.js
- Automatic deployment on every push to the main branch
- Performance monitoring with Lighthouse CI
- SEO optimization and proper asset handling

### Local Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
scientific-insight-engine/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   └── lib/                 # Utility functions
├── .github/workflows/       # GitHub Actions workflows
├── public/                  # Static assets
└── docs/                    # Documentation
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
