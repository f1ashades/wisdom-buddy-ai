import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Button - 智慧蓝背景，白色文字
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        // CTA Button - 活力橙，用于最重要的行动召唤
        cta: "bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80",
        // Secondary Button - 灰色线框，智慧蓝文字
        secondary: "border border-primary bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
        // Keep outline for backwards compatibility 
        outline: "border border-primary bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
        // Text Button - 无背景和边框，智慧蓝文字
        ghost: "bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
        // Success Button
        success: "bg-success text-success-foreground hover:bg-success/90 active:bg-success/80",
        // Warning Button
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 active:bg-warning/80",
        // Destructive Button
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
      },
      size: {
        // Small Button - 32px height
        sm: "h-8 px-3 text-sm",
        // Default Button - 44px height (following specification)
        default: "h-11 px-4 text-base",
        // Large Button
        lg: "h-12 px-6 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
