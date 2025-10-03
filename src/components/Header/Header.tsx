import { useId } from 'react';
import aboutInfoData from '../../data/aboutInfo.json';
import useLanguage from '../../hooks/useLanguage';
import type { Theme, Language } from '../../types.d';
import { EmailIcon, LocationIcon, PhoneIcon } from '../Icons';
import './Header.css';
import useTheme from '../../hooks/useTheme';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    name: 'Jhon Mauricio Aguirre Cortés',
    title: 'Doctor en Química'
  },
  en: {
    name: 'Jhon Mauricio Aguirre Cortés',
    title: 'PhD in Chemistry'
  }
};

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const { theme, changeTheme } = useTheme();

  const themeSelectId = useId();
  const languageSelectId = useId();

  function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newTheme = event.target.value as Theme;
    changeTheme(newTheme);
  }

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = event.target.value as Language;
    changeLanguage(newLanguage);
  }

  return (
    <header className="Header">
      <div>
        <h1>{headerTranslation[language].name}</h1>
        <h2>{headerTranslation[language].title}</h2>
      </div>
      <select
        id={themeSelectId}
        value={theme}
        onChange={handleThemeChange}
      >
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
        <option value="test">Test</option>
      </select>
      <select
        id={languageSelectId}
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div className="Header-contactInfo">
        <div>
          <LocationIcon size="20" />
          <span>{aboutInfo.address}</span>
        </div>
        <div>
          <PhoneIcon size="20" />
          <span>{aboutInfo.mobilePhone}</span>
        </div>
        <div>
          <EmailIcon size="20" />
          <span>{aboutInfo.email}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
