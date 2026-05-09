# ThreadHive Frontend — Agent Instructions

Reddit-like forum app (threads, comments, voting). Built with React 19 + Vite.

## Commands

| Task       | Command             |
| ---------- | ------------------- |
| Dev server | `npm run dev`       |
| Build      | `npm run build`     |
| Test       | `npm test` (Vitest) |
| Lint       | `npm run lint`      |

## Architecture

- **No routing library** — navigation is managed via `currentPage` state in [`src/App.jsx`](src/App.jsx). To add pages, add a state value and render the component conditionally.
- **Services** ([`src/services/`](src/services/)) — async functions that currently return data from [`data/dummyData.js`](data/dummyData.js). Comments in the service files mark where to swap in real API calls.
- **Components** ([`src/components/`](src/components/)) — each component lives in its own folder (`ComponentName/ComponentName.jsx` + `ComponentName.css`). Shared/reusable components go in [`src/components/Shared/`](src/components/Shared/).
- **Pages** ([`src/pages/`](src/pages/)) — organized by role: `Auth/` (Login, Register) and `User/` (Home, ThreadPage).
- **State management** — React built-in hooks only (`useState`, `useEffect`). No Redux, no Context API.

## Key Conventions

- **Data shape**: MongoDB-style objects with `_id` strings. Voting fields: `upvotedBy` (array of user IDs), `downvotedBy`, `voteCount`.
- **Current user**: Hardcoded as `'currentUserId'` in vote logic until auth is wired up.
- **New components**: Create a folder under `src/components/` with matching `.jsx` and `.css` files. Use named exports for pages (`export default function`) and pass navigation via `onNavigate` prop.

## Styling

1. Use React Bootstrap components over raw HTML:
   - Card instead of div wrappers
   - Button instead of buttons
   - Badge iunstead of span with badge classes
   - Form component over raw inputs
   - Container/Row/Col for layout

2. Prefer Bootstrap utility classes over custom CSS:
   - Spacing: m-_, p-_, gap-_, mb-_, mt-\*, etc.
   - Layout: d-flex, justify-content-_, align-items-_, etc.
   - Typography: fw-bold, text-muted, small
   - Borders: border, rounded, shadow-sm
   - Background: bg-light, bg-body-tertiary, etc.

3. Do not:
   - Invent unnecessary custom CSS classes
   - Use inline styles unless unavoidable
   - Add unnecessary wrapper divs
   - Overnest layout structures

4. Maintain:
   - Responsiveness
   - Proper spacing rhythm (prefer gap-2, gap-3, mb-3)
   - Clear visual hierarchy and semantic structure
   - Accessiblility (a11y) aria-label, proper button types
