import { getTranslation, type TranslationKey } from "./translations";
import { useLanguage } from "./language-provider";

export function useTranslation() {
  const { lang } = useLanguage();

  function t(key: TranslationKey): string {
    return getTranslation(lang, key);
  }

  return { t, lang };
}
