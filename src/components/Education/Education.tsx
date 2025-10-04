import educationData from '../../data/education.json';
import graduatesData from '../../data/graduates.json';
import useLanguage from '../../hooks/useLanguage';
import Section from '../Section/Section';
import './Education.css';

const education = educationData.reverse();
const graduates = graduatesData;

const educationTranslation = {
  es: {
    educationTitle: 'Educación',
    graduatesTitle: 'Diplomados'
  },
  en: {
    educationTitle: 'Education',
    graduatesTitle: 'Graduates'
  }
};

const Education = () => {
  const { language } = useLanguage();

  return (
    <>
      <Section title={educationTranslation[language].educationTitle}>
        {education.map((edu) => (
          <div
            key={edu.id}
            className="Education-item"
          >
            <div className="Education-mainInfo">
              <h3>{edu[language].degreeTitle}</h3>
              <h4>{edu[language].institution}</h4>
              <span>{edu[language].city}</span>
            </div>
            <div className="Education-dateInfo">
              <h3>{edu[language].date}</h3>
            </div>
          </div>
        ))}
      </Section>
      <Section title={educationTranslation[language].graduatesTitle}>
        {graduates.map((grd) => (
          <div
            key={grd.id}
            className="Education-item"
          >
            <div className="Education-mainInfo">
              <h3>{grd[language].graduateTitle}</h3>
              <h4>{grd[language].institution}</h4>
              <span>{grd[language].city}</span>
            </div>
            <div className="Education-dateInfo">
              <h3>{grd[language].date}</h3>
              <h4>{grd[language].duration}</h4>
            </div>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Education;
