import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-default-background)] text-[var(--button-default-foreground)] " +
          "hover:bg-[var(--button-default-hover-background,var(--button-default-background))] " +
          "hover:text-[var(--button-default-hover-text,var(--button-default-foreground))]",

        destructive:
          "bg-[var(--button-destructive-background)] text-[var(--button-destructive-foreground)] " +
          "hover:bg-[var(--button-destructive-hover-background,var(--button-destructive-background))] " +
          "hover:text-[var(--button-destructive-hover-text,var(--button-destructive-foreground))]",

        secondary:
          "bg-[var(--button-secondary-background)] text-[var(--button-secondary-foreground)] " +
          "hover:bg-[var(--button-secondary-hover-background,var(--button-secondary-background))] " +
          "hover:text-[var(--button-secondary-hover-text,var(--button-secondary-foreground))]",

        outline:
          "border border-border bg-[var(--button-outline-background)] text-[var(--button-outline-foreground)] " +
          "hover:bg-[var(--button-outline-hover-background,var(--button-outline-background))] " +
          "hover:text-[var(--button-outline-hover-text,var(--button-outline-foreground))]",

        ghost:
          "bg-[var(--button-ghost-background)] text-[var(--button-ghost-foreground)] " +
          "hover:bg-[var(--button-ghost-hover-background,var(--button-ghost-background))] " +
          "hover:text-[var(--button-ghost-hover-text,var(--button-ghost-foreground))]",

        link:
          "bg-[var(--button-link-background)] text-[var(--button-link-foreground)] underline-offset-4 " +
          "hover:bg-[var(--button-link-hover-background,var(--button-link-background))] " +
          "hover:text-[var(--button-link-hover-text,var(--button-link-foreground))] hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
