import { Link } from 'react-router';
import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
import { EmailIcon, LocationIcon, OrcidIcon } from '../Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    mail: 'Enviar un correo'
  },
  en: {
    mail: 'Send mail'
  }
};

const footerTranslation = {
  es: {
    vitae: 'Vitae',
    articles: 'Artículos',
    memories: 'Memorias',
    contact: 'Contacto',
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  },
  en: {
    vitae: 'Vitae',
    articles: 'Articles',
    memories: 'Memories',
    contact: 'Contact',
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  }
};

const LanguageSelector = () => {
  const { settings, changeLanguage } = useSettings();
  const { language } = settings;

  return (
    <div className="LanguageSelector">
      <button
        className={language === 'es' ? 'LanguageSelector-option is-active' : 'LanguageSelector-option'}
        onClick={() => changeLanguage('es')}
      >
        Español
      </button>
      {' / '}
      <button
        className={language === 'en' ? 'LanguageSelector-option is-active' : 'LanguageSelector-option'}
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

  return (
    <header className="Header">
      <div className="Header-front">
        <div className="Header-mainName">
          <Link to="/">{aboutInfo[language].firstName + ' ' + aboutInfo[language].lastName}</Link>
          <h2>{aboutInfo[language].title}</h2>
        </div>
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
      </div>
      <div className="Header-back">
        <Link
          to="/"
          reloadDocument
        >
          {footerTranslation[language].vitae}
        </Link>
        <Link
          to="/articles"
          reloadDocument
        >
          {footerTranslation[language].articles}
        </Link>
        <Link
          to="/memories"
          reloadDocument
        >
          {footerTranslation[language].memories}
        </Link>
        <Link
          to="/contact"
          reloadDocument
        >
          {footerTranslation[language].contact}
        </Link>
      </div>
    </header>
  );
};

export default Header;
