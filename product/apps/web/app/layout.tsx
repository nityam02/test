import React from "react";
import "../styles/globals.css";
import I18nProvider from "./context";
import { HeaderMain } from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <HeaderMain />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
