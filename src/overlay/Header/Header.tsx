import { Link, type To } from 'react-router';
import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
import { EmailIcon, LocationIcon } from '../../components/Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    sendMail: 'Enviar un correo',
    vitae: 'Vitae',
    resume: 'Resumen',
    articles: 'Artículos',
    media: 'Media',
    memories: 'Memorias',
    contact: 'Contacto'
  },
  en: {
    sendMail: 'Send mail',
    vitae: 'Vitae',
    resume: 'Resume',
    articles: 'Articles',
    media: 'Media',
    memories: 'Memories',
    contact: 'Contact'
  }
};

interface LinkComponentProps {
  children: React.ReactNode;
  to: To;
}

const LinkComponent = ({ children, to }: LinkComponentProps) => {
  return (
    <Link
      to={to}
      reloadDocument
      className="text-md font-bold text-blue-950 uppercase no-underline transition-colors xl:text-xl"
    >
      {children}
    </Link>
  );
};

const MainTitle = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="flex flex-col">
      <Link
        to="/"
        reloadDocument
        className="font-ibm-plex-serif mb-1 text-center text-4xl font-bold text-blue-950 uppercase no-underline transition-colors hover:text-blue-900"
      >
        {aboutInfo.firstName + ' ' + aboutInfo.lastName}
      </Link>
      <h2 className="hidden text-base font-medium text-blue-950 xl:inline">{aboutInfo[language].title}</h2>
    </div>
  );
};

const LanguageSelector = () => {
  const { settings, changeLanguage } = useSettings();
  const { language } = settings;

  return (
    <div className="hidden min-w-24 flex-col justify-center gap-1 rounded-xs border border-sky-700 bg-sky-50 px-2 inset-shadow-sm xl:flex">
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
    <div className="text-md hidden flex-col gap-2 border-y border-sky-600 px-4 py-2 font-semibold xl:flex">
      <div className="flex gap-2">
        <LocationIcon size="20" />
        <span>{aboutInfo[language].address}</span>
      </div>
      <div className="flex gap-2">
        <EmailIcon size="20" />
        <Link
          to="/contact"
          reloadDocument
          className="transition-colors hover:text-blue-900 hover:underline"
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
    <div className="z-20 flex h-8 items-center justify-around gap-4 overflow-auto border-b border-blue-300 bg-blue-50 px-5 shadow-sm xl:justify-center">
      <LinkComponent to="/resume">{headerTranslation[language].resume}</LinkComponent>
      <LinkComponent to="/">{headerTranslation[language].vitae}</LinkComponent>
      <LinkComponent to="/articles">{headerTranslation[language].articles}</LinkComponent>
      <LinkComponent to="/media">{headerTranslation[language].media}</LinkComponent>
      <LinkComponent to="/contact">{headerTranslation[language].contact}</LinkComponent>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-30 flex w-full flex-col">
      <div className="z-40 flex flex-col items-center justify-between border-b border-blue-300 bg-blue-100 px-12 py-2 shadow-sm xl:flex-row xl:py-4">
        <MainTitle />
        <div className="flex gap-8">
          <MoreInfo />
          <LanguageSelector />
        </div>
      </div>
      <LinksContainer />
    </header>
  );
};

export default Header;
