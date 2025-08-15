"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface CustomThemeType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const CustomTheme = createContext<CustomThemeType | undefined>(undefined);

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Only run on client side after hydration
  useEffect(() => {
    setMounted(true);

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setThemeState(initialTheme);
    updateDocumentClass(initialTheme);
  }, []);

  // Update document class and localStorage when theme changes
  const updateDocumentClass = (newTheme: Theme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    updateDocumentClass(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Prevent flash of wrong theme during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CustomTheme.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </CustomTheme.Provider>
  );
}

export function useTheme() {
  const context = useContext(CustomTheme);
  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
}
