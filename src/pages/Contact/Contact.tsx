import useLanguage from '../../hooks/useLanguage';
import './Contact.css';

const contactTranslation = {
  es: {
    placeholder: 'Contacto aquí...'
  },
  en: {
    placeholder: 'Contact here...'
  }
};

const Contact = () => {
  const { language } = useLanguage();

  return <main className="Contact">{contactTranslation[language].placeholder}</main>;
};

export default Contact;
