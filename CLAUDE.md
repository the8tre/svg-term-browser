# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build       # Compile TypeScript to lib/
npm run clean       # Remove lib/ directory
npm test            # Run Jest tests
npm run deps        # Build and check for missing/extra dependencies
```

No lint script is configured. TypeScript strict mode serves as the primary type checker.

## Architecture

**svg-term** converts asciinema asciicast recordings into animated SVG using server-side React rendering.

### Data Flow

```
asciicast JSON → load-cast.ts → to-view-model.ts → React components → renderToStaticMarkup → SVG string
```

1. **`render.tsx`** — Entry point. Parses options, merges theme with defaults, calls `renderToStaticMarkup(<SvgTerm .../>)`
2. **`svg-term.tsx`** — Root component. Calls `toViewModel()` then composes `Window → Document → Registry → Reel → Frame[]`
3. **`to-view-model.ts`** — Core transformation. Converts asciicast frames to a `ViewModel` with deduplicated line symbols (via `object-hash`), cursor positions, and styled "words" grouped by ANSI attributes
4. **React components** (`src/*.tsx`) — Pure SVG/CSS output; no DOM interaction. `Reel` generates CSS keyframe animation, `Registry` holds reusable SVG `<defs>` symbols, `Word` handles ANSI text styling

### Key Design Decisions

- **Symbol registry deduplication**: Identical lines across frames are rendered once as SVG `<symbol>` elements and referenced via `<use>`, reducing output size
- **CSS keyframe animation**: Frame timing uses a single CSS animation on the reel rather than JS-driven animation
- **No test files exist** despite Jest being configured and fixtures being present in `fixtures/`

### Types

The `typings/` directory contains ambient declarations for untyped third-party packages (`load-asciicast`, `ansi-to-rgb`, `object-hash`).

Build output goes to `lib/` with `.d.ts`, `.d.ts.map`, and `.js.map` files included in the published package.
