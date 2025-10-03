import type { Theme, Language } from '../types.d';

export function getThemeFromStorage() {
  return localStorage.getItem('theme') as Theme;
}

export function saveThemeInStorage(newTheme: Theme) {
  localStorage.setItem('theme', newTheme);
}

export function getLanguageFromStorage() {
  return localStorage.getItem('language') as Language;
}

export function saveLanguageInStorage(newLanguage: Language) {
  localStorage.setItem('language', newLanguage);
}
