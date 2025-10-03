import { createContext, useEffect, useState } from 'react';
import { getThemeFromStorage, saveThemeInStorage } from '../../utils';
import type { Theme } from '../../types.d';

interface ThemeContextType {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
}

interface ThemeProps {
  children: React.ReactNode;
}

const initialTheme = getThemeFromStorage() || 'light';

const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  changeTheme: () => {}
});

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
