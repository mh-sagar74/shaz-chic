"use client";

import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

export default function AnimatedIconButton({ children, ...props }) {
  return (
    <MotionIconButton
      {...props}
      sx={{
        position: "relative",
        background: "linear-gradient(90deg,#22223B,#4A4E69)",
        color: "#F2E9E4",
        width: 24,
        height: 24,
        padding: 2,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg,#4A4E69,#22223B)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: -1,
        },
        "&:hover::before": {
          opacity: 1,
        },
        ...props.sx,
      }}
      whileHover={{ scale: 1.2, boxShadow: "0px 6px 18px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </MotionIconButton>
  );
}
