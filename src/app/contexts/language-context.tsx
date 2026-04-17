import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type AppLanguage = 'bg' | 'en';

const STORAGE_KEY = 'phi-lang';

type LanguageContextValue = {
  lang: AppLanguage;
  setLang: (lang: AppLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): AppLanguage {
  if (typeof window === 'undefined') return 'bg';
  const s = localStorage.getItem(STORAGE_KEY);
  return s === 'en' || s === 'bg' ? s : 'bg';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<AppLanguage>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: AppLanguage) => setLangState(next);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
