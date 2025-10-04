import { createContext, useEffect, useState } from 'react';
import { getThemeFromStorage, saveThemeInStorage } from '../../utils';
import type { Theme } from '../../types.d';

const initialTheme = getThemeFromStorage() || 'light';

interface ThemeContextType {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  changeTheme: () => {}
});

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', theme);
    saveThemeInStorage(theme);
  }, [theme]);

  function changeTheme(newTheme: Theme) {
    setTheme(newTheme);
  }

  const themeValue = {
    theme,
    changeTheme
  };

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
