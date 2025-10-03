import { useContext } from 'react';
import LanguageContext from '../context/Language/LanguageContext';

function useLanguage() {
  return useContext(LanguageContext);
}

export default useLanguage;
