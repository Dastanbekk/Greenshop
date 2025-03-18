import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import EnglishFlag from "../assets/img/en.webp";
import RussianFlag from "../assets/img/ru.webp";
import UzbekFlag from "../assets/img/uz.webp";

import translationEn from "./locale/en/en.json";
import translationRu from "./locale/ru/ru.json";
import translationUz from "./locale/uz/uz.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
  uz: {
    translation: translationUz,
  },
};

const savedLanguage = localStorage.getItem("i18nextLng") || "en";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: savedLanguage,
    fallbackLng: "en",
    keySeparator: "^",
    nsSeparator: "~",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const languageMenu = [
  {
    id: "lang-en",
    title: "English",
    shortTitle: "En",
    code: "en",
    icon: EnglishFlag,
  },
  {
    id: "lang-ru",
    title: "Русский",
    shortTitle: "Ru",
    code: "ru",
    icon: RussianFlag,
  },
  {
    id: "lang-uz",
    title: "O‘zbekcha",
    shortTitle: "Uz",
    code: "uz",
    icon: UzbekFlag,
  },
];
export default i18next;
