import { Link } from 'react-router';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        <Link
          to="/"
          reloadDocument
        >
          Home
        </Link>
        <Link
          to="/vitae"
          reloadDocument
        >
          Vitae
        </Link>
        <Link
          to="/contact"
          reloadDocument
        >
          Contacto
        </Link>
      </div>
      <span>&copy; 2025 - Jhon Mauricio Aguirre Cortés</span>
    </footer>
  );
};

export default Footer;
