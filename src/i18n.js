import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en.json";
import translationPTBR from "./translations/ptbr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ptbr: {
    translation: translationPTBR,
  },
};

i18n
  .use(initReactI18next)

  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
    resources,
  });

export default i18n;