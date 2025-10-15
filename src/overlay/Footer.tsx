import { LocationIcon } from '../components/Icons';
import LanguageSelector from '../components/LanguageSelector';
import { useSettings } from '../hooks/useSettings';
import aboutInfoData from '../data/aboutInfo.json';

const aboutInfo = aboutInfoData;

const footerTranslation = {
  es: {
    design: 'Diseño y código:',
    info: 'Contenido y material audiovisual:'
  },
  en: {
    design: 'Design and coding:',
    info: 'Content and audiovisual material:'
  }
};

const Footer = () => {
  const { settings } = useSettings();
  const { language } = settings;

  const CURRENT_YEAR = '2025';
  const CURRENT_VERSION = '0.0.1';

  return (
    <footer className="absolute inset-x-0 bottom-0 z-10 flex w-full flex-col border-t border-slate-300 bg-slate-200 px-2 shadow-sm">
      <div className="flex sm:flex sm:items-center sm:gap-4 md:gap-8 xl:hidden">
        <div className="flex items-center gap-1">
          <LocationIcon size="20" />
          <span className="text-xs font-semibold lg:text-sm">{aboutInfo[language].address}</span>
        </div>
        <LanguageSelector />
      </div>
      <div className="flex justify-between text-slate-500 italic">
        <span>
          &copy; {footerTranslation[language].design} Tryncha, {CURRENT_YEAR} | {footerTranslation[language].info} Jhon
          Mauricio Aguirre Cortés, {CURRENT_YEAR}
        </span>
        <span>ver {CURRENT_VERSION}</span>
      </div>
    </footer>
  );
};

export default Footer;
