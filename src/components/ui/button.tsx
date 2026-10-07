import * as React from "react";
import { cn } from "@/lib/utils";

const buttonClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button({ asChild, className, children, ...props }: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      className: cn(buttonClasses, className),
    });
  }
  return (
    <button className={cn(buttonClasses, className)} {...props}>
      {children}
    </button>
  );
}
