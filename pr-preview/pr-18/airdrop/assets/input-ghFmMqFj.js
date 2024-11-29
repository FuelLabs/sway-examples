import { r as reactExports, j as jsxRuntimeExports, K as cn } from "./index-M6uXd__v.js";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          inputStyle
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const inputStyle = [
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
  "text-white"
];
export {
  Input as I
};
