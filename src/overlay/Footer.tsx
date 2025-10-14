import useSettings from '../hooks/useSettings';

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
    <footer className="absolute inset-x-0 bottom-0 z-10 hidden w-full border-t border-slate-300 bg-slate-200 px-2 text-slate-500 italic shadow-sm xl:flex xl:justify-between">
      <span>
        &copy; {footerTranslation[language].design} Tryncha, {CURRENT_YEAR} | {footerTranslation[language].info} Jhon
        Mauricio Aguirre Cortés, {CURRENT_YEAR}
      </span>
      <span>ver {CURRENT_VERSION}</span>
    </footer>
  );
};

export default Footer;
