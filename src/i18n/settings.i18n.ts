import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from '#i18n/translations/en.translation.json';

const DEFAULT_LOCALE = 'en';

i18n.use(initReactI18next).init({
  fallbackLng: DEFAULT_LOCALE,
  interpolation: {
    escapeValue: false
  },
  lng: DEFAULT_LOCALE,
  resources: {
    en: {
      translation
    }
  }
});

export default i18n;
