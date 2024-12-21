"use client";
import Navbar from "./navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
