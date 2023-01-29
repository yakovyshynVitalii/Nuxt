import { createI18n } from "vue-i18n";

import uk from "~/locales/uk.json";
import ru from "~/locales/ru.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   useRedirectCookie: false,
    //   cookieKey: 'i18n_redirected',
    //   alwaysRedirect: false,
    //   fallbackLocale: null,
    //   redirectOn: 'root'
    // },
    locale: "uk",
    messages: { uk, ru },
    lazy: true,
    langDir: "lang/",
    defaultLocale: "uk",
    sortRoutes: true,
    strategy: "prefix_and_default",
  });

  vueApp.use(i18n);
});
