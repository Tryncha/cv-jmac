import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
import './About.css';

const aboutInfo = aboutInfoData;

const aboutTranslation = {
  es: {
    aboutTitle: 'Sobre mí'
  },
  en: {
    aboutTitle: 'About me'
  }
};

const About = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section className="About">
      <h2>{aboutTranslation[language].aboutTitle}</h2>
      <hr />
      <p>{aboutInfo[language].resume}</p>
      <p>{aboutInfo[language].currentActivity}</p>
    </section>
  );
};

export default About;
