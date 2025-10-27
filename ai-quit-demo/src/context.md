## Overview
The App component is the top-level application wrapper for the AI Guardian experience. It wires up routing between the onboarding flow, dashboard, chat, progress tracking, and settings, and renders the shared navigation and modals. Use this component when you want to embed the complete user-facing app within another React application, optionally attaching a data-id attribute to assist with testing or automation.

## Available Imports
**Components:**
- `App` - (named export) Top-level application component that initializes routing, onboarding, and the main UI (Dashboard, ChatAssistant, ProgressTracker, Settings, Onboarding, BlockingModal, Navigation)

**Types:**
- AppProps - (not exported) Props interface inferred from the App component's inline type: `{ 'data-id'?: string }`. The prop is optional and, when provided, is attached as a data-id attribute to the root wrapper element.

## Component Props & Types
App component props (as defined by its inline type):
```typescript
interface AppProps {
  'data-id'?: string
}
```
- `data-id` - (optional) A string that will be applied to the root wrapper element as a data-id attribute. This is useful for testing or automation hooks.

Notes:
- The AppProps interface is not exported; it is described here for clarity. The App component itself must be imported from the entry point as a named export.
- The prop is optional. If omitted, no data-id attribute is added to the root wrapper.

## Import Patterns
EXACT import statements you can copy-paste:

- Named export (recommended)
```typescript
import { App } from './src'
```

- If you are consuming from the project’s root and the component is re-exported at that level, you might alternatively import from the component directory root:
```typescript
import { App } from './src'
```

Note: The App prop shape is inline (as described above) and does not have a separate exported type to import.

## Usage Requirements
- No special React context providers are required beyond standard React usage.
- The App manages its own internal state for onboarding, routing, and modal visibility.
- To attach an identifier for testing or automation, pass the `data-id` prop as a string:
  - Example: `<App {'data-id': 'main-app'} />`
- The App uses React Router to switch between views (Dashboard, Chat, Progress, Settings) and includes a persistent bottom navigation.

## How It Works
- On initial render, the App may present the onboarding flow. Once onboarding is completed, it renders a Router with routes for:
  - `/` (Dashboard)
  - `/chat` (ChatAssistant)
  - `/progress` (ProgressTracker)
  - `/settings` (Settings)
- The root wrapper div receives a data-id attribute when provided.
- The App composes several subcomponents (Dashboard, ChatAssistant, ProgressTracker, Settings, Onboarding, BlockingModal, Navigation) to deliver the full user experience.

## Layout & Appearance
- The App uses a full-page layout with a gradient header, content area, and a fixed bottom navigation bar.
- The root wrapper applies a data-id attribute (if provided) for test automation.
- Visual styling relies on the component implementations it composes (e.g., Tailwind-based utility classes).

## Styling & Theming
- The component relies on the styling of its internal subcomponents. To influence appearance, pass the className props to those subcomponents as needed when you integrate with your design system.
- No explicit theming API is exposed from the entry point; theming is handled within the internal components.

## Code Examples

### Example 1: Basic Usage
```typescript
// Show the absolute minimum required to use the App
import { App } from './src'

function AppHost() {
  return <App />
}
```

### Example 2: Basic Usage with data-id
```typescript
import { App } from './src'

function AppHost() {
  // Pass a data-id for testing/automation
  return <App {'data-id': 'main-app'} />
}
```

### Example 3: Embedding within a larger page
```typescript
import React from 'react'
import { App } from './src'

function DashboardWrapper() {
  return (
    <div className="container mx-auto p-4">
      <App {'data-id': 'embedded-app'} />
    </div>
  )
}
```

### Example 4: Composing in a larger app with additional layout
```typescript
import React from 'react'
import { App } from './src'

function PageWithApp() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow">
        <h1 className="text-xl font-semibold">My App Shell</h1>
      </header>
      <main className="p-4">
        <App {'data-id': 'shell-app'} />
      </main>
    </div>
  )
}
```

### Example 5: Conditional rendering scenario (conceptual)
```typescript
import React from 'react'
import { App } from './src'

function ConditionalApp({ showApp }: { showApp: boolean }) {
  return (
    <>
      {showApp ? (
        <App {'data-id': 'conditional-app'} />
      ) : (
        <div className="p-4 text-gray-600">App is hidden</div>
      )}
    </>
  )
}
```