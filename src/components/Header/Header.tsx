// import { useId } from 'react';
import { Link } from 'react-router';
import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
// import type { Theme } from '../../types.d';
import { EmailIcon, LocationIcon, OrcidIcon } from '../Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    themes: {
      light: 'Claro',
      dark: 'Oscuro'
    },
    mail: 'Enviar un correo'
  },
  en: {
    themes: {
      light: 'Light',
      dark: 'Dark'
    },
    mail: 'Send mail'
  }
};

const LanguageSelector = () => {
  const { settings, changeLanguage } = useSettings();
  const { language } = settings;

  return (
    <div className="LanguageSelector">
      <button
        className={language === 'es' ? 'is-active' : ''}
        onClick={() => changeLanguage('es')}
      >
        Español
      </button>
      {' / '}
      <button
        className={language === 'en' ? 'is-active' : ''}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
};

const Header = () => {
  const { settings } = useSettings();
  const { language } = settings;

  // const themeSelectId = useId();

  // function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   const newTheme = event.target.value as Theme;
  //   changeTheme(newTheme);
  // }

  return (
    <header className="Header">
      <div className="Header-banner">
        <Link to="/vitae">{aboutInfo[language].firstName + ' ' + aboutInfo[language].lastName}</Link>
        <h2>{aboutInfo[language].title}</h2>
      </div>
      {/* <select
        id={themeSelectId}
        value={theme}
        onChange={handleThemeChange}
      >
        {Object.entries(headerTranslation[language].themes).map(([key, themeValue]) => (
          <option
            key={key}
            value={key}
          >
            {themeValue}
          </option>
        ))}
      </select> */}
      <LanguageSelector />
      <div className="Header-contactInfo">
        <div>
          <LocationIcon size="20" />
          <span>{aboutInfo[language].address}</span>
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
        <div>
          <EmailIcon size="20" />
          <Link to="/contact">{headerTranslation[language].mail}</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
