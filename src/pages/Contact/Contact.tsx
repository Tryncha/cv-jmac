import useSettings from '../../hooks/useSettings';
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
  const { settings } = useSettings();
  const { language } = settings;

  return <main className="Contact">{contactTranslation[language].placeholder}</main>;
};

export default Contact;
