import { useContext } from 'react';
import LanguageContext from '../context/Language/languageContext';

function useLanguage() {
  return useContext(LanguageContext);
}

export default useLanguage;
