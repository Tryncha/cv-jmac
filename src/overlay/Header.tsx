import { Link, type To } from 'react-router';
import aboutInfoData from '../data/aboutInfo.json';
import useSettings from '../hooks/useSettings';
import { LocationIcon } from '../components/Icons';
import LanguageSelector from '../components/LanguageSelector';

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
    <div className="border-x border-slate-300 px-4 py-1 first:border-l-0 last:border-r-0 hover:bg-slate-200">
      <Link
        to={to}
        reloadDocument
        className="text-md rounded-md font-bold uppercase no-underline transition-colors hover:text-slate-900 xl:text-xl"
      >
        {children}
      </Link>
    </div>
  );
};

const LinksContainer = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="z-20 flex items-center justify-around overflow-auto rounded-xl bg-slate-100 shadow-sm xl:justify-center">
      {/* <LinkComponent to="/resume">{headerTranslation[language].resume}</LinkComponent> */}
      <LinkComponent to="/">{headerTranslation[language].vitae}</LinkComponent>
      <LinkComponent to="/articles">{headerTranslation[language].articles}</LinkComponent>
      <LinkComponent to="/media">{headerTranslation[language].media}</LinkComponent>
      <LinkComponent to="/contact">{headerTranslation[language].contact}</LinkComponent>
    </div>
  );
};

const Header = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <header className="fixed top-0 left-0 z-30 flex w-full flex-col items-center justify-between border-b border-slate-300 bg-slate-200 px-6 py-2 shadow-sm xl:flex-row xl:py-1">
      <div className="flex flex-col">
        <Link
          to="/"
          reloadDocument
          className="font-ibm-plex-serif text-center text-3xl font-bold uppercase no-underline transition-colors hover:text-slate-900"
        >
          {aboutInfo.firstName + ' ' + aboutInfo.lastName}
        </Link>
        <span>{aboutInfo[language].title}</span>
      </div>
      <LinksContainer />
      <div className="flex items-center gap-1">
        <LocationIcon size="24" />
        <span className="font-semibold">{aboutInfo[language].address}</span>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
