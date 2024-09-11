import { Typography, TypographyProps } from "@mui/material";

type TextProps = TypographyProps;

export const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <Typography {...props} className={`text-zinc-800 dark:text-white font-sans ${className}`}>
      {children}
    </Typography>
  );
};
