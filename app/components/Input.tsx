import * as React from "react";

import { cn } from "../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-input bg-background px-4 py-6 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#FFFFFF] [box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] focus:[box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[15px] font-[family-name:var(--font-poppins)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
