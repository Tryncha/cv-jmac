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
    <footer className="absolute bottom-0 z-30 flex w-full flex-col bg-slate-200 shadow-sm">
      <div className="flex justify-center gap-4 border-t border-slate-300 p-1 2xl:hidden">
        <div className="flex items-center gap-1">
          <LocationIcon size="20" />
          <span className="text-sm font-semibold">{aboutInfo[language].address}</span>
        </div>
        <LanguageSelector />
      </div>
      <div className="flex justify-between overflow-auto border-t border-slate-300 px-2">
        <span className="text-nowrap text-slate-500 italic">
          &copy; {footerTranslation[language].design} Tryncha, {CURRENT_YEAR} | {footerTranslation[language].info} Jhon
          Mauricio Aguirre Cortés, {CURRENT_YEAR}
        </span>
        <span className="hidden text-slate-500 italic lg:inline">ver {CURRENT_VERSION}</span>
      </div>
    </footer>
  );
};

export default Footer;
