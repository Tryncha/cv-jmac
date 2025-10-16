import { Link, type To } from 'react-router';
import aboutInfoData from '../data/aboutInfo.json';
import { useSettings } from '../hooks/useSettings';
import { BlockLogo, LocationIcon } from '../components/Icons';
import LanguageSelector from '../components/LanguageSelector';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    sendMail: 'Enviar un correo',
    vitae: 'Vitae',
    publications: 'Publicaciones',
    contact: 'Contacto'
  },
  en: {
    sendMail: 'Send mail',
    vitae: 'Vitae',
    publications: 'Publications',
    contact: 'Contact'
  }
};

interface LinkComponentProps {
  children: React.ReactNode;
  to: To;
}

const LinkComponent = ({ children, to }: LinkComponentProps) => {
  return (
    <div className="border-x border-slate-300 py-1 first:border-l-0 last:border-r-0 hover:bg-slate-200">
      <Link
        to={to}
        className="text-md px-4 py-2 font-bold uppercase no-underline transition-colors hover:text-slate-900 sm:px-11 md:px-15 lg:px-24 xl:rounded-md xl:px-4 xl:text-xl"
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
    <div className="flex w-full cursor-pointer justify-center bg-slate-100 shadow-sm xl:w-auto xl:rounded-xl">
      <LinkComponent to="/">{headerTranslation[language].vitae}</LinkComponent>
      <LinkComponent to="/publications">{headerTranslation[language].publications}</LinkComponent>
      <LinkComponent to="/contact">{headerTranslation[language].contact}</LinkComponent>
    </div>
  );
};

const Header = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <header className="z-30 flex w-full flex-col justify-between border-b border-slate-300 bg-slate-200 shadow-sm sm:fixed sm:top-0 sm:left-0 xl:flex-row xl:px-8 xl:py-1">
      <div className="flex justify-center gap-2 px-8 pt-1 pb-2 xl:p-0">
        <div className="hidden md:block">
          <BlockLogo size="64" />
        </div>
        <div className="flex flex-col justify-center">
          <Link
            to="/"
            className="font-ibm-plex-serif text-center text-3xl font-bold uppercase no-underline transition-colors hover:text-slate-900 md:text-left xl:text-left"
          >
            {aboutInfo.firstName + ' ' + aboutInfo.lastName}
          </Link>
          <span className="inline text-center sm:text-sm xl:text-left">{aboutInfo[language].title}</span>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <LinksContainer />
        <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-4">
          <div className="flex items-center gap-1">
            <LocationIcon size="20" />
            <span className="font-semibold">{aboutInfo[language].address}</span>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
