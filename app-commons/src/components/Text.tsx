import { Typography, TypographyProps } from "@mui/material";

export type TextProps = TypographyProps;

export const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <Typography {...props} className={`text-black dark:text-white font-sans ${className}`}>
      {children}
    </Typography>
  );
};
