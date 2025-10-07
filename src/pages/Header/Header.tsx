import { Link } from 'react-router';
import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
import { EmailIcon, LocationIcon } from '../../components/Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    sendMail: 'Enviar un correo',
    vitae: 'Vitae',
    articles: 'Artículos',
    memories: 'Memorias',
    contact: 'Contacto'
  },
  en: {
    sendMail: 'Send mail',
    vitae: 'Vitae',
    articles: 'Articles',
    memories: 'Memories',
    contact: 'Contact'
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
          <Link to="/">{aboutInfo.firstName + ' ' + aboutInfo.lastName}</Link>
          <h2>{aboutInfo[language].title}</h2>
        </div>
        <LanguageSelector />
        <div className="Header-contactInfo">
          <div>
            <LocationIcon size="20" />
            <span>{aboutInfo[language].address}</span>
          </div>
          <div>
            <EmailIcon size="20" />
            <Link to="/contact">{headerTranslation[language].sendMail}</Link>
          </div>
        </div>
      </div>
      <div className="Header-back">
        <div>
          <Link
            to="/"
            reloadDocument
          >
            {headerTranslation[language].vitae}
          </Link>
          <Link
            to="/articles"
            reloadDocument
          >
            {headerTranslation[language].articles}
          </Link>
          {/* <Link
            to="/memories"
            reloadDocument
          >
            {headerTranslation[language].memories}
          </Link> */}
          <Link
            to="/contact"
            reloadDocument
          >
            {headerTranslation[language].contact}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
