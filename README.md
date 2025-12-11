# crm-base-ui

A modern, accessible component library built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/) for building robust CRM interfaces.

## Features

- **Accessible**: Built on Radix UI primitives (WAI-ARIA compliant)
- **Customizable**: Styled with Tailwind CSS
- **Dark Mode**: Native support included
- **Lightweight**: Tree-shakeable components
- **Type-Safe**: Full TypeScript support
- **Advanced Data Table**: Powered by TanStack Table with sorting, filtering, pagination, grouping, column resizing, and pinning
- **Charts**: Interactive visualizations with Recharts
- **Forms**: React Hook Form + Zod integration
- **Calendar**: Date pickers with React Day Picker

## Installation

```bash
npm install crm-base-ui
```

## Quick Start

Import CSS in your root file (`main.tsx` or `App.tsx`):

```tsx
import "crm-base-ui/dist/main.css";
```

Use components:

```tsx
import { Button, DataTable } from "crm-base-ui";

function App() {
  return <Button variant="default">Click me</Button>;
}
```

## Data Table Usage

The DataTable component supports advanced features:

```tsx
import { DataTable, DataTableColumnHeader } from "crm-base-ui";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<YourType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },
  // ... more columns
];

function MyTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="name"
      enableRowExpansion={false}
      enableGrouping={false}
      enableColumnSizing={false}
      enableColumnPinning={false}
    />
  );
}
```

## Available Components

### Core

Button, Input, Checkbox, Radio Group, Select, Slider, Switch, Textarea, Toggle

### Layout

Aspect Ratio, Card, Collapsible, Resizable Panels, Scroll Area, Separator, Sheet, Sidebar

### Feedback

Alert, Alert Dialog, Badge, Progress, Skeleton, Sonner (Toast), Tooltip

### Navigation

Breadcrumb, Dropdown Menu, Menubar, Navigation Menu, Pagination, Tabs

### Data Display

Accordion, Avatar, Calendar, Carousel, Chart (Bar, Line, Pie, Radar, Area), Table, **Data Table**

### Form

Form, Label (React Hook Form + Zod compatible)

### Overlay

Dialog, Drawer, Hover Card, Popover, Context Menu, Command

## Peer Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

## Configuration

The library includes pre-compiled styles. If customizing deeply, ensure `tailwind.config.js` scans `node_modules/crm-base-ui`.

## License

MIT License

## Author

**Tushar Yadav** | Indygen Team
