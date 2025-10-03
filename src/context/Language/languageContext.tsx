import { createContext, useState } from 'react';
import type { Language } from '../../types';

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

interface LanguageProps {
  children: React.ReactNode;
}

const initialLanguage = 'es';
const LanguageContext = createContext<LanguageContextType>({
  language: initialLanguage,
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }: LanguageProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const languageValue = {
    language,
    setLanguage
  };

  return <LanguageContext.Provider value={languageValue}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
