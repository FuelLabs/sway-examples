import React from "react";
import { Typography, TypographyProps } from "@mui/material";

type TextProps = TypographyProps;

export const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <Typography {...props} className={`text-foreground font-sans ${className}`}>
      {children}
    </Typography>
  );
};