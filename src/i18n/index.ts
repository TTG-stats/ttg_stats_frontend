import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "./english";
import uk from "./ukrainian";
import ru from "./ruzkiy";

const initLocalization = () => i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    uk: {
      translation: uk,
    },
    ru: {
      translation: ru,
    },
  },
  lng: Localization.locale.split("-")[0],
  fallbackLng: "en",

});

export default initLocalization;