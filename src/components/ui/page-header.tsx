import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export function PageHeader({ title, description, icon: Icon, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{title}</h1>
      </div>
      {description && (
        <p className="text-muted-foreground text-lg font-medium max-w-2xl px-1">{description}</p>
      )}
    </div>
  );
}
