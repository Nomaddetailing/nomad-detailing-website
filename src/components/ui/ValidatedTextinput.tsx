import * as React from "react";
import { cn } from "./utils";

type ValidationState = "default" | "valid" | "invalid";

interface InputProps extends React.ComponentProps<"input"> {
  validationState?: ValidationState;
}

function Input({
  className,
  type,
  validationState = "default",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-validation={validationState}
      className={cn(
        // base
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "dark:bg-input/30 bg-input-background border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base",
        "transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        // default focus styles (only when validationState = default)
        validationState === "default" &&
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // invalid overrides (FORCE override ring/border even on focus)
        validationState === "invalid" &&
          "border-red-500 focus-visible:!border-red-500 focus-visible:!ring-red-500/30 focus-visible:!ring-[3px]",

        // valid overrides
        validationState === "valid" &&
          "border-emerald-500 focus-visible:!border-emerald-500 focus-visible:!ring-emerald-500/30 focus-visible:!ring-[3px]",

        className
      )}
      {...props}
    />
  );
}

export { Input };