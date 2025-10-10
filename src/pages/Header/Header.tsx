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
    media: 'Media',
    memories: 'Memorias',
    contact: 'Contacto'
  },
  en: {
    sendMail: 'Send mail',
    vitae: 'Vitae',
    articles: 'Articles',
    media: 'Media',
    memories: 'Memories',
    contact: 'Contact'
  }
};

const MainTitle = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="MainTitle">
      <Link
        to="/"
        reloadDocument
        className="MainTitle-name"
      >
        {aboutInfo.firstName + ' ' + aboutInfo.lastName}
      </Link>
      <h2 className="MainTitle-title">{aboutInfo[language].title}</h2>
    </div>
  );
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
      <hr />
      <button
        className={language === 'en' ? 'LanguageSelector-option is-active' : 'LanguageSelector-option'}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
};

const MoreInfo = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="MoreInfo">
      <div className="MoreInfo-item">
        <LocationIcon size="20" />
        <span>{aboutInfo[language].address}</span>
      </div>
      <div className="MoreInfo-item">
        <EmailIcon size="20" />
        <Link
          to="/contact"
          reloadDocument
        >
          {headerTranslation[language].sendMail}
        </Link>
      </div>
    </div>
  );
};

const LinksContainer = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="LinksContainer">
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
      <Link
        to="/media"
        reloadDocument
      >
        {headerTranslation[language].media}
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
  );
};

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-top">
        <MainTitle />
        <div className="Header-container">
          <MoreInfo />
          <LanguageSelector />
        </div>
      </div>
      <div className="Header-bottom">
        <LinksContainer />
      </div>
    </header>
  );
};

export default Header;
