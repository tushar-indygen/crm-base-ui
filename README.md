# crm-base-ui

A modern, accessible component library built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/) for building robust CRM interfaces.

## Features

- **Accessible**: Built on Radix UI primitives (WAI-ARIA compliant)
- **Customizable**: Styled with Tailwind CSS
- **Dark Mode**: Native support included
- **Lightweight**: Tree-shakeable components
- **Type-Safe**: Full TypeScript support
- **Advanced Data Table**: Powered by TanStack Table with sorting, filtering, pagination, column resizing, and pinning
- **Kanban Board**: Fully generic drag-and-drop board powered by @dnd-kit
- **Charts**: Interactive visualizations with Recharts
- **Forms**: React Hook Form + Zod integration
- **Calendar**: Date pickers with React Day Picker
- **Sensitive Display**: Sensitive data display with toggle visibility

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
      enableColumnSizing={false}
      enableColumnPinning={false}
    />
  );
}
```

## Kanban Board Usage

The `KanbanBoard` is a generic component that handles drag-and-drop status updates:

```tsx
import { KanbanBoard, KanbanColumnDef, KanbanItem } from "crm-base-ui";

interface MyTask extends KanbanItem {
  id: string;
  status: string;
  title: string;
  description?: string;
}

const columns: KanbanColumnDef[] = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const tasks: MyTask[] = [
  { id: "1", status: "todo", title: "Setup Project" },
  { id: "2", status: "in-progress", title: "Implement Kanban" },
];

function KanbanPage() {
  const handleUpdate = (id: string | number, newStatus: string) => {
    // Update your state or call API here
    console.log(`Task ${id} moved to ${newStatus}`);
  };

  return (
    <KanbanBoard
      items={tasks}
      columns={columns}
      onItemUpdate={handleUpdate}
      onItemClick={(task) => console.log("Task clicked:", task)}
      // Optional: custom card rendering
      renderCard={(task) => (
        <div className="p-2">
          <h4 className="font-bold">{task.title}</h4>
          {task.description && <p className="text-sm">{task.description}</p>}
        </div>
      )}
    />
  );
}
```

## Sensitive Display Usage

```tsx
import { SensitiveDisplay } from "crm-base-ui";

function SensitiveDisplayPage() {
  return (
    <SensitiveDisplay
      value="1234567890"
      maskChar="•"
      showLastChars={4}
      isEditable={true}
      onValueChange={(value) => console.log("Value changed:", value)}
      placeholder="Enter value"
      disabled={false}
      inputClassName="w-full"
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

Accordion, Avatar, Calendar, Carousel, Chart (Bar, Line, Pie, Radar, Area), Table, **Data Table**, **Kanban Board**, **Sensitive Display**

### Form

Form, Label (React Hook Form + Zod compatible)

### Overlay

Dialog, Drawer, Hover Card, Popover, Context Menu, Command, **Kanban Dialog**

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
