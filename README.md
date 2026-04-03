> Share terminal sessions via SVG and CSS

# svg-term

This is a fork of [svg-term](https://github.com/marionebl/svg-term) adapted for use in a browser context (React webapp bundled with Vite).

* Render [asciinema][asciinema] asciicast to animated SVG
* Use custom themes
* Share asciicast everywhere

```sh
npm install svg-term
```

## Usage

```js
const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const {render} = require('svg-term');

(async () => {
  const data = String(await readFile('./asciicast.json'));
  const svg = render(data);
  // => <svg>...</svg>
})()
```

## API

```ts
// `input` can be string/object of v1 or v2:
// https://github.com/asciinema/asciinema/blob/develop/doc
// or an already loaded cast:
// https://github.com/marionebl/load-asciicast
//
// `options` won't take effect if `input` is an already loaded cast.
render(input: string, options?: Options): string

interface Options {
  /**
   * ANSI theme to use
   * - has to contain all keys if specified
   * - defaults to Atom One theme if omitted
   **/
  theme?: Theme;
  /** Render with a framing window, defaults to false */
  window?: boolean;
  /** Idle time limit in milliseconds */
  idle?: number,
  /** Frames per second limit, see https://github.com/marionebl/svg-term/issues/13 */
  fps?: number,
  /** Lower bound of timeline to render in milliseconds */
  from?: number;
  /** Upper bound of timeline to render in milliseconds */
  to?: number;
  /** Timestamp of single frame to render in milliseconds **/
  at?: number;
}

interface Theme {
  /** ANSI Black */
  0: RGBColor;
  /** ANSI Red */
  1: RGBColor;
  /** ANSI Green */
  2: RGBColor;
  /** ANSI Yellow */
  3: RGBColor;
  /** ANSI Blue */
  4: RGBColor;
  /** ANSI Magenta */
  5: RGBColor;
  /** ANSI Cyan */
  6: RGBColor;
  /** ANSI White */
  7: RGBColor;
  /** ANSI Light Black */
  8: RGBColor;
  /** ANSI Light Red */
  9: RGBColor;
  /** ANSI Light Green */
  10: RGBColor;
  /** ANSI Light Yellow */
  11: RGBColor;
  /** ANSI Light Blue */
  12: RGBColor;
  /** ANSI Light Magenta */
  13: RGBColor;
  /** ANSI Light Cyan */
  14: RGBColor;
  /** ANSI Light White */
  15: RGBColor;
  /** Default background color */
  background: RGBColor;
  /** Default color for bold text */
  bold: RGBColor;
  /** Cursor color */
  cursor: RGBColor;
  /** Default text color */
  text: RGBColor
  /** Default font size */
  fontSize: number;
  /** Default line height */
  lineHeight: number;
  /** Default font family */
  fontFamily: string;
}

type RGBColor = [number, number, number];
```

---

## Changes

### ESM build output (`tsconfig.esm.json`, `package.json`)

Added a second TypeScript compilation target that emits ES modules to `lib/esm/`. The `package.json` now includes a `"module"` field and an `"exports"` map with `import`/`require` conditions so Vite resolves the ESM build while Node.js consumers continue to use the CJS build.

```json
"module": "lib/esm/index.js",
"exports": {
  ".": {
    "import": "./lib/esm/index.js",
    "require": "./lib/index.js"
  }
}
```

The build script now runs both compilations: `tsc && tsc -p tsconfig.esm.json`.

### Browser-compatible server renderer (`src/render.tsx`)

Changed the import from `react-dom/server` to `react-dom/server.browser` so the browser build of React's server renderer is used directly, avoiding the need for any Vite alias.

Added `typings/react-dom__server.browser.d.ts` to provide TypeScript types for the subpath import.

### Removed Emotion CSS-in-JS (`src/*.tsx`)

Replaced all `@emotion/styled` and `@emotion/core` usage with plain React elements using inline `style` props and SVG attributes. Emotion injects styles into `document.head` when rendering in a browser context, which means styles never appear in the SVG output when using `renderToStaticMarkup`. The affected files:

- **`Background.tsx`** — `styled.rect` → plain `<rect fill={...}>`
- **`Cursor.tsx`** — `styled.rect` → plain `<rect fill={...}>`
- **`Registry.tsx`** — `StyledBackground` → inline `<rect fill="transparent">`
- **`svg-term.tsx`** — `StyledContainer` → `<g style={{fontFamily, fontSize}}>`
- **`Word.tsx`** — `StyledWord`/`StyledWordBackground` → `<text style={...}>` / `<rect fill={...}>`
- **`Reel.tsx`** — `keyframes` + `StyledAnimationStage` → inline `<style>@keyframes n{...}</style>` + `<g style={{animation...}}>`

### Removed `object-hash` dependency (`src/to-view-model.ts`)

`object-hash` uses Node's `crypto` module. Its browser bundle (`dist/object_hash.js`) internally uses `crypto.getRandomValues` as a bare global, which is undefined in bundled module scope. Replaced `hash(words)` with `JSON.stringify(words)` — sufficient for the deduplication use case (equality grouping, no collision resistance needed).

Added `typings/object-hash__dist__object_hash.d.ts` (no longer needed after this change, but left in place).

### React key props (`src/svg-term.tsx`)

Added missing `key` props on the cursor `<use>` element and on `<Word>` elements rendered from `line.words.map(...)` to suppress React list key warnings.

[asciinema]: https://asciinema.org/

