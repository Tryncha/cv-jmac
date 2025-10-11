import aboutInfoData from '../../data/aboutInfo.json';
import useSettings from '../../hooks/useSettings';
import './Resume.css';

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
    <section className="Resume">
      <h2 className="u-vitaeSubtitle">{resumeTranslation[language].resumeTitle}</h2>
      <hr />
      <p>{aboutInfo[language].resume}</p>
      <p>{aboutInfo[language].currentActivity}</p>
    </section>
  );
};

export default Resume;
