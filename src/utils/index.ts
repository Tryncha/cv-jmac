import type { Language } from '../types.d';

export function getLanguageFromStorage() {
  return localStorage.getItem('language') as Language;
}

export function saveLanguageInStorage(newLanguage: Language) {
  localStorage.setItem('language', newLanguage);
}
