"use client";
import React, { createContext, useCallback, useState } from "react";

export interface I18nContextType {
  locale: string;
  setLocale: (language: string) => void;
  translate: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState("en");

  const translate = useCallback(
    (key: string) => {
      const translatedData = require(`../locales/${locale}.json`);
      const response = translatedData[key] || key;
      return response;
    },
    [locale]
  );

  const value = {
    locale,
    setLocale,
    translate,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
