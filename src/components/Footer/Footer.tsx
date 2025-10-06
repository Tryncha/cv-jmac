import useSettings from '../../hooks/useSettings';
import './Footer.css';

const footerTranslation = {
  es: {
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  },
  en: {
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  }
};

const Footer = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <footer className="Footer">
      <span>&copy; {footerTranslation[language].copyrightText}</span>
    </footer>
  );
};

export default Footer;
