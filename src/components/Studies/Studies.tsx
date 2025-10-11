import React from 'react';
import educationData from '../../data/education.json';
import graduatesData from '../../data/graduates.json';
import otherStudiesData from '../../data/otherStudies.json';
import useSettings from '../../hooks/useSettings';
import './Studies.css';

const education = educationData.reverse();
const graduates = graduatesData.reverse();
const otherStudies = otherStudiesData.reverse();

const studiesTranslation = {
  es: {
    educationTitle: 'Educación',
    graduatesTitle: 'Diplomados',
    otherStudiesTitle: 'Otros Estudios'
  },
  en: {
    educationTitle: 'Education',
    graduatesTitle: 'Graduates',
    otherStudiesTitle: 'Other Studies'
  }
};

const MainStudies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section className="MainStudies">
      <section className="MainStudies-titulation">
        <h2>{studiesTranslation[language].educationTitle}</h2>
        <hr />
        {education.map((edu) => (
          <div
            key={edu.id}
            className="MainStudies-item"
          >
            <div className="MainStudies-itemMainInfo">
              <h3>{edu[language].degreeTitle}</h3>
              <h4>{edu[language].institution}</h4>
              <span>{edu[language].city}</span>
            </div>
            <div className="MainStudies-itemAwards">
              <span className="u-textAnimatedGradient">{edu[language].award}</span>
            </div>
            <div className="MainStudies-itemDateInfo">
              <h3>{edu.date}</h3>
            </div>
          </div>
        ))}
      </section>
      <section className="MainStudies-graduates">
        <h2>{studiesTranslation[language].graduatesTitle}</h2>
        <hr />
        {graduates.map((grd) => (
          <div
            key={grd.id}
            className="MainStudies-item"
          >
            <div className="MainStudies-itemMainInfo">
              <h3>{grd[language].graduateTitle}</h3>
              <h4>{grd[language].institution}</h4>
              <span>{grd[language].city}</span>
            </div>
            <div className="MainStudies-itemDateInfo">
              <h3>{grd[language].date}</h3>
              <span>{grd[language].duration}</span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

const OtherStudies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="OtherStudies">
      <details>
        <summary>{studiesTranslation[language].otherStudiesTitle}</summary>
        {otherStudies.map((edu) => (
          <React.Fragment key={edu.id}>
            <hr />
            <div className="OtherStudies-item">
              <div className="OtherStudies-itemMainInfo">
                <h3>{edu[language].name}</h3>
                <h4>{edu[language].institution}</h4>
                <span>{edu[language].city}</span>
              </div>
              <div className="OtherStudies-itemDateInfo">
                <h3>{edu[language].date}</h3>
                <span>{edu[language].duration}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </details>
      <hr />
    </div>
  );
};

const Studies = () => {
  return (
    <article className="Studies">
      <MainStudies />
      <OtherStudies />
    </article>
  );
};

export default Studies;
