import * as React from "react";
import { cn } from "./utils";

type ValidationState = "default" | "valid" | "invalid";

interface InputProps extends React.ComponentProps<"input"> {
  validationState?: ValidationState;
}

const base = "w-full px-4 py-3 rounded-lg border bg-card focus:outline-none transition";

const stateStyles: Record<ValidationState, string> = {
  default: "border-border focus:border-primary",
  valid: "border-emerald-500 focus:border-emerald-500",
  invalid: "border-red-500 focus:border-red-500",
};

function Input({ className, type, validationState = "default", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-validation={validationState}
      className={cn(base, stateStyles[validationState], className)}
      {...props}
    />
  );
}

export { Input };
