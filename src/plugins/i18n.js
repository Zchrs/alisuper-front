import { createI18n } from 'vue-i18n';
import en from '../locales/en.json'
import es from '../locales/es.json'

export const i18n = createI18n({
  locale: window.navigator.language.substring(0, 2) || 'en',
  availableLocales: ['es', 'en'],
  messages: {
    en,
    es
  },
});
