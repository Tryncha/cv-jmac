import { createContext, useEffect, useState } from 'react';
import { getLanguageFromStorage, saveLanguageInStorage } from '../../utils';
import type { Language } from '../../types.d';

const initialLanguage = getLanguageFromStorage() || 'es';

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    saveLanguageInStorage(language);
  }, [language]);

  function changeLanguage(newLanguage: Language) {
    setLanguage(newLanguage);
  }

  const languageValue = {
    language,
    changeLanguage
  };

  return <LanguageContext.Provider value={languageValue}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
