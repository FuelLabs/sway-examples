import { Card, CardActionArea, CardContent } from "@mui/material";
import { Text } from "./Text";
import React from "react";
import { useNavigate } from "@tanstack/react-router";

type HomeCardProps = {
  href: string;
  title: string;
  isEligible?: boolean;
  children: React.ReactNode;
};

export const HomeCard = ({
  href,
  title,
  isEligible,
  children,
}: HomeCardProps) => {
  const navigate = useNavigate();

  console.log({ isEligible });
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "18px",
        backgroundColor: isEligible ? "black" : "#5a5c59",
        borderColor: "#1e1e1e",
        borderWidth: "3px",
        height: "142px",
        width: "280px",
        opacity: isEligible ? 1 : 0.5,
        // pointerEvents: isEligible ? "auto" : "none",
      }}
      className={`${!isEligible ? "hover:bg-[#4db6ac] hover:text-black" : "hover:bg-slate-950"}`}
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
