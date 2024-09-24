import { Card, CardActionArea, CardContent } from "@mui/material";
import { Text } from "./Text";
import React from "react";
import { useNavigate } from "@tanstack/react-router";

type HomeCardProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export const HomeCard = ({ href, title, children }: HomeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "18px",
        backgroundColor: "black",
        borderColor: "#1e1e1e",
        borderWidth: "3px",
        height: "142px",
        width: "280px",
      }}
      className="hover:bg-slate-950"
    >
      <CardActionArea
        onClick={() => {
          navigate({ to: href });
        }}
        sx={{ height: "stretch" }}
      >
        <CardContent>
          <Text className="text-4xl mb-4">{title}</Text>
          <Text className="text-base">{children}</Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
