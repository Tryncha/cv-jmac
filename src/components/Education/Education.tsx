import educationData from '../../data/education.json';
import useLanguage from '../../hooks/useLanguage';
import Section from '../Section/Section';
import './Education.css';

const education = educationData.reverse();

const educationTranslation = {
  es: {
    educationTitle: 'Educación'
  },
  en: {
    educationTitle: 'Education'
  }
};

const Education = () => {
  const { language } = useLanguage();

  return (
    <Section title={educationTranslation[language].educationTitle}>
      {education.map((edu) => (
        <div
          key={edu.id}
          className="Education-item"
        >
          <div className="Education-mainInfo">
            <h3>{edu[language].degree}</h3>
            <h4>{edu[language].institution}</h4>
            <span>{edu[language].city}</span>
          </div>
          <div className="Education-dateInfo">
            <h3>{edu[language].date}</h3>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Education;
