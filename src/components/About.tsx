import aboutInfoData from '../data/aboutInfo.json';
import useSettings from '../hooks/useSettings';
import VitaeSection from './VitaeSection';

const aboutInfo = aboutInfoData;

const aboutTranslation = {
  es: {
    aboutTitle: 'Sobre Mí'
  },
  en: {
    aboutTitle: 'About Me'
  }
};

const About = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <VitaeSection title={aboutTranslation[language].aboutTitle}>
      <p className="my-2 px-4 text-justify whitespace-pre-line">{aboutInfo[language].resume}</p>
    </VitaeSection>
  );
};

export default About;
