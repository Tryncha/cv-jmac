import { useContext } from 'react';
import LanguageContext from '../context/Language/LanguageContext';

function useLanguage() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return languageContext;
}

export default useLanguage;
