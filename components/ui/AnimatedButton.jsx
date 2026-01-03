"use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function AnimatedButton({ children, ...props }) {
  return (
    <MotionButton
      {...props}
      sx={{
        position: "relative",
        background: "linear-gradient(90deg,#22223B,#4A4E69)",
        color: "#F2E9E4",
        textTransform: "none",
        borderRadius: "10px",
        paddingX: "10px",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg,#4A4E69,#22223B)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: -1,
          borderRadius: "inherit",
        },
        "&:hover::before": {
          opacity: 1,
        },
        ...props.sx,
      }}
      whileHover={{ scale: 1.04, boxShadow: "0px 2px 20px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </MotionButton>
  );
}

