import { useContext } from "react";
import { I18nContext, I18nContextType } from "../context";

const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};

export default useTranslation;
