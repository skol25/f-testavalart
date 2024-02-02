// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslations from "./es.json";
import enTranslations from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslations },
    en: { translation: enTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
