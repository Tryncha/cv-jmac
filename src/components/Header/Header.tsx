import aboutInfoData from '../../../data/aboutInfo.json';
import { EmailIcon, LocationIcon, PhoneIcon } from '../Icons';
import './Header.css';

const aboutInfo = aboutInfoData;

const Header = () => {
  return (
    <header className="Header">
      <div>
        <h1>Jhon Mauricio Aguirre Cortés</h1>
        <h2>Doctor en Química</h2>
      </div>
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
