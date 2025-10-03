import aboutInfoData from '../../../data/aboutInfo.json';
import useLanguage from '../../hooks/useLanguage';
import type { Language } from '../../types';
import { EmailIcon, LocationIcon, PhoneIcon } from '../Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const headerTranslation = {
  es: {
    name: 'Jhon Mauricio Aguirre Cortés',
    title: 'Doctor en Química'
  },
  en: {
    name: 'Jhon Mauricio Aguirre Cortés',
    title: 'PhD in Chemistry'
  }
};

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="Header">
      <div>
        <h1>{headerTranslation[language].name}</h1>
        <h2>{headerTranslation[language].title}</h2>
      </div>
      <select
        onChange={(event) => {
          const newLanguage = event.target.value as Language;
          setLanguage(newLanguage);
        }}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div className="Header-contactInfo">
        <div>
          <LocationIcon size="20" />
          <span>{aboutInfo.address}</span>
        </div>
        <div>
          <PhoneIcon size="20" />
          <span>{aboutInfo.mobilePhone}</span>
        </div>
        <div>
          <EmailIcon size="20" />
          <span>{aboutInfo.email}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
