import useSettings from '../../hooks/useSettings';
import Section from '../Section/Section';
import './Resume.css';
import aboutInfoData from '../../data/aboutInfo.json';

const aboutInfo = aboutInfoData;

const resumeTranslation = {
  es: {
    resumeTitle: 'Resumen'
  },
  en: {
    resumeTitle: 'Resume'
  }
};

const Resume = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <Section title={resumeTranslation[language].resumeTitle}>
      <p>{aboutInfo[language].resume}</p>
      <p>{aboutInfo[language].currentActivity}</p>
    </Section>
  );
};

export default Resume;
