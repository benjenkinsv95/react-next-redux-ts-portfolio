import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";
import "./globals.css";
import Header from "@/components/Header/Header";
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import ThemeScript from "@/components/ThemeScript";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ben Jenkins | Software Engineer Portfolio",
  description:
    "Ben Jenkins - Sr. Software Engineer Portfolio | Harvard | Next.js, Redux, React, & TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={roboto.variable}>
        <CustomThemeProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
