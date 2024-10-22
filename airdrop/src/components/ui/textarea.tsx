import * as React from "react"

import { cn } from "@/lib/utils"
import { inputStyle } from "../Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className, inputStyle
        )}
        ref={ref} aria-multiline="true"
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }



// export const MultilineInput: React.FC<{
//   value?: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   className?: string;
//   type?: string;
//   maxRows?: number;
// }> = ({ value, onChange, placeholder, className, type, maxRows }) => {
//   return (
//     <TextField
//       value={value}
//       className={clsx([
//         ...inputStyle,
//         className,
//         "placeholder:text-zinc-400 text-zinc-50!important",
//       ])}
//       onChange={onChange}
//       placeholder={placeholder}
//       type={type}
//       multiline
//       maxRows={maxRows}
//     />
//   );
// };
