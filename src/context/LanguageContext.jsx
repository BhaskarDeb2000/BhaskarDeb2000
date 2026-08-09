import { createContext, useContext, useState } from 'react';
import { content } from '../data/content';

const LOCALES = ['en', 'sv', 'fi'];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () =>
    setLang((prev) => LOCALES[(LOCALES.indexOf(prev) + 1) % LOCALES.length]);
  const nextLang = LOCALES[(LOCALES.indexOf(lang) + 1) % LOCALES.length];
  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, nextLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
