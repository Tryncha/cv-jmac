import { useId } from 'react';
import aboutInfoData from '../../data/aboutInfo.json';
import useLanguage from '../../hooks/useLanguage';
import type { Theme, Language } from '../../types.d';
import { LocationIcon, EmailIcon, LinkedInIcon, OrcidIcon } from '../Icons';
import './Header.css';
import useTheme from '../../hooks/useTheme';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    themes: {
      light: 'Claro',
      dark: 'Oscuro'
    }
  },
  en: {
    themes: {
      light: 'Light',
      dark: 'Dark'
    }
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

  console.log(Object.entries(headerTranslation[language].themes));

  return (
    <header className="Header">
      <div>
        <h1>{aboutInfo[language].firstName + ' ' + aboutInfo[language].lastName}</h1>
        <h2>{aboutInfo[language].title}</h2>
      </div>
      <select
        id={themeSelectId}
        value={theme}
        onChange={handleThemeChange}
      >
        {Object.entries(headerTranslation[language].themes).map(([key, theme]) => (
          <option
            key={key}
            value={key}
          >
            {theme}
          </option>
        ))}
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
          <span>{aboutInfo[language].address}</span>
        </div>
        <div>
          <EmailIcon size="20" />
          <span>{aboutInfo[language].email}</span>
        </div>
        <div>
          <OrcidIcon size="20" />
          <a
            href={`https://orcid.org/${aboutInfo[language].orcid}`}
            target="_blank"
          >
            {`https://orcid.org/${aboutInfo[language].orcid}`}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
