import aboutInfoData from '../data/aboutInfo.json';
import useSettings from '../hooks/useSettings';
import VitaeSection from './VitaeSection';

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
    <VitaeSection title={aboutTranslation[language].aboutTitle}>
      <p className="my-3 text-justify">{aboutInfo[language].resume}</p>
      <p className="my-3 text-justify">{aboutInfo[language].currentActivity}</p>
    </VitaeSection>
  );
};

export default About;
