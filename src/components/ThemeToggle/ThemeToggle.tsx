"use client";

import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Only render after hydration to prevent SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR/hydration
    return (
      <IconButton
        color="inherit"
        sx={{
          color: "inherit",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <LightMode />
      </IconButton>
    );
  }

  // Only use theme context after mounting
  return <ThemeToggleClient />;
}

function ThemeToggleClient() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      sx={{
        color: "inherit",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
