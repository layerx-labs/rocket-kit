# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TAIKAI Rocket Kit is a React design system and component library (`@taikai/rocket-kit`) built using atomic design principles. Components are organized into Atoms (basic), Molecules (composite), and Organisms (complex layouts).

## Common Commands

```bash
# Development - run in watch mode
bun start

# Run Storybook for component development (port 6006)
bun run storybook

# Build for production
bun run build

# Run all tests
bun test

# Run a single test file
bun test <filename>  # e.g., bun test button.test.tsx

# Run tests in watch mode
bun test --watch

# Lint source code
bun run lint

# Check bundle size (30KB limit)
bun run size

# Analyze bundle
bun run analyze
```

## Architecture

### Atomic Design Structure

- **`src/atoms/`** - Basic building blocks (Button, Icon, TextField, Checkbox, etc.)
- **`src/molecules/`** - Composite components (Table, FormGroup, Modal footer, PaginationControl)
- **`src/organisms/`** - Complex layouts (Modal, TabsPanel, GridContainer, HorizontalNav)
- **`src/ions/`** - Design tokens (colors, typography, breakpoints, icons)
- **`src/utils/`** - Utility functions and hooks (useColor, useVisible)

### Component Structure Pattern

Each component follows this structure:
```
component-name/
├── index.tsx          # Component logic & exports
├── types.ts           # TypeScript interfaces
├── styles.tsx         # Styled-components
└── stories/
    └── component.stories.tsx
```

### Export Pattern

All components must be exported from `src/index.ts` following the atomic design hierarchy.

### Styling

- Uses **styled-components** with TypeScript
- CSS variables for theming (`--bg`, `--txt`, `--hover`)
- **polished** library for color manipulation (rem, rgba)
- Color system defined in `src/ions/variables.ts` with semantic palette and multiple hues (50-950)

## Testing

- Uses Jest with React Testing Library
- Tests located in `__tests__/` directories within components
- Run `screen.logTestingPlaygroundURL()` to debug tests interactively
- Snapshot tests stored in `__snapshots__/`

## Code Quality

- Pre-commit hook runs lint and tests via Husky
- Prettier config: single quotes, trailing commas (ES5), no parens for single arrow params
- TypeScript strict mode enabled
- Bundle size limit: 30KB (CJS and ESM)

## Key Dependencies

- React 18+ (peer dependency)
- styled-components 5.2+
- TypeScript 4.2+
- TSDX for build tooling
- Storybook 10 for documentation (uses Vite)
