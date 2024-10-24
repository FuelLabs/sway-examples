import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          inputStyle
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

import clsx from "clsx";

export const inputStyle = [
  "mt-1",
  "shrink",
  "basis-2/3",
  "rounded-lg",
  "border-2",
  "border-solid",
  "border-zinc-500/25",
  "p-1",
  "font-sans",
  "outline-none",
  "md:-ml-2",
  "md:mt-2",
  "md:p-2",
  "bg-transparent",
  "placeholder:text-zinc-400",
  "text-white",
];
