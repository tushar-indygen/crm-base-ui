# crm-base-ui

A modern, accessible, and customizable component library built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). Designed for building robust CRM interfaces with ease.

## Features

- **Accessible**: Built on top of Radix UI primitives to ensure full accessibility (WAI-ARIA compliant).
- **Customizable**: Styled with Tailwind CSS, making it easy to adapt to your brand.
- **Dark Mode**: Native support for dark mode.
- **Lightweight**: Tree-shakeable components to keep your bundle size small.
- **Type-Safe**: Written in TypeScript with full type definitions.

## Installation

Install the package via npm:

```bash
npm install crm-base-ui
```

## Usage

Import the CSS in your root file (e.g., `main.tsx` or `App.tsx`):

```tsx
import "crm-base-ui/dist/main.css";
```

Import and use components in your application:

```tsx
import { Button } from "crm-base-ui";

function App() {
  return (
    <div className="p-4">
      <Button variant="default">Click me</Button>
    </div>
  );
}

export default App;
```

## Configuration

Ensure your `tailwind.config.js` (if using Tailwind v3) or CSS configuration is set up to scan `node_modules/crm-base-ui` if you need to customize the styles deeply, though the library comes with pre-compiled styles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by **Tushar Yadav**.
