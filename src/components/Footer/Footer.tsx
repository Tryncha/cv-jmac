import { Link } from 'react-router';
import './Footer.css';
import useLanguage from '../../hooks/useLanguage';

const footerTranslation = {
  es: {
    home: 'Inicio',
    vitae: 'Vitae',
    memories: 'Memorias',
    contact: 'Contacto',
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  },
  en: {
    home: 'Home',
    vitae: 'Vitae',
    memories: 'Memories',
    contact: 'Contact',
    copyrightText: '2025 - Jhon Mauricio Aguirre Cortés'
  }
};

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="Footer">
      <div>
        <Link
          to="/"
          reloadDocument
        >
          {footerTranslation[language].home}
        </Link>
        <Link
          to="/vitae"
          reloadDocument
        >
          {footerTranslation[language].vitae}
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
