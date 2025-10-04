import useLanguage from '../../hooks/useLanguage';
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
  const { language } = useLanguage();

  return (
    <Section title={resumeTranslation[language].resumeTitle}>
      <p>{aboutInfo[language].resume}</p>
      <p>{aboutInfo[language].currentActivity}</p>
    </Section>
  );
};

export default Resume;
