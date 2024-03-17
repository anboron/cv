import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en.translation;
      pl: typeof pl.translation;
      es: typeof es.translation;
      pt: typeof pt.translation;
    };
    // other
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en,
    pl,
    es,
    pt,
  },
  lng: "en",
  supportedLngs: ["en", "pl", "es", "pt"],
});
