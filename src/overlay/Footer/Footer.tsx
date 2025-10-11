import aboutInfoData from '../../data/aboutInfo.json';
import './Footer.css';

const aboutInfo = aboutInfoData;

const Footer = () => {
  return (
    <footer className="Footer">
      <span>&copy; {aboutInfo.firstName + ' ' + aboutInfo.lastName}, 2025</span>
    </footer>
  );
};

export default Footer;
