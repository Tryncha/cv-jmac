import { Link } from 'react-router';
import './Footer.css';
import useSettings from '../../hooks/useSettings';

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

const Footer = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <footer className="Footer">
      <div>
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
      <span>&copy; {footerTranslation[language].copyrightText}</span>
    </footer>
  );
};

export default Footer;
