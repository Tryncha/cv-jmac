import aboutInfoData from '../../data/aboutInfo.json';
import './Footer.css';

const aboutInfo = aboutInfoData;

const Footer = () => {
  return (
    <footer className="Footer">
      <span>&copy; 2025 - {aboutInfo.firstName + ' ' + aboutInfo.lastName}</span>
    </footer>
  );
};

export default Footer;
