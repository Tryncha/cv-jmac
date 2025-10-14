import aboutInfoData from '../data/aboutInfo.json';
import { useSettings } from '../hooks/useSettings';
import Section from './Section';

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
    <Section title={aboutTranslation[language].aboutTitle}>
      <p className="my-2 px-4 text-justify whitespace-pre-line">
        <strong>{aboutInfo[language].title}</strong>. {aboutInfo[language].resume}
      </p>
    </Section>
  );
};

export default About;
