import educationData from '../../data/education.json';
import graduatesData from '../../data/graduates.json';
import useSettings from '../../hooks/useSettings';
import './Education.css';

const education = educationData.reverse();
const graduates = graduatesData.reverse();

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
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <article className="Education">
      <section>
        <h2>{educationTranslation[language].educationTitle}</h2>
        <hr />
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
      </section>
      <section>
        <h2>{educationTranslation[language].graduatesTitle}</h2>
        <hr />
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
              <span>{grd[language].duration}</span>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Education;
