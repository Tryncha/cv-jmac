import { createContext, useState, useEffect } from 'react';
import type { Theme, Language, Settings } from '../types';
import { getSettingsFromStorage, saveSettingsInStorage } from '../utils';

const initialSettings = getSettingsFromStorage();

interface SettingsContextType {
  settings: {
    theme: Theme;
    language: Language;
  };
  changeTheme: (newTheme: Theme) => void;
  changeLanguage: (newLanguage: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    saveSettingsInStorage(settings);
  }, [settings]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', settings.language);
  }, [settings.language]);

  function changeTheme(newTheme: Theme) {
    setSettings((prev) => ({
      ...prev,
      theme: newTheme
    }));
  }

  function changeLanguage(newLanguage: Language) {
    setSettings((prev) => ({
      ...prev,
      language: newLanguage
    }));
  }

  const settingsValue = {
    settings,
    changeTheme,
    changeLanguage
  };

  return <SettingsContext.Provider value={settingsValue}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
