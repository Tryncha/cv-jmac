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

const Studies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <article className="Studies">
      <div className="Studies-mainStudies">
        <section className="Studies-titulation">
          <h2 className="u-vitaeSubtitle">{studiesTranslation[language].educationTitle}</h2>
          <hr />
          {education.map((edu) => (
            <div
              key={edu.id}
              className="Studies-item"
            >
              <div className="Studies-itemMainInfo">
                <h3>{edu[language].degreeTitle}</h3>
                <h4>{edu[language].institution}</h4>
                <span>{edu[language].city}</span>
              </div>
              <div className="Studies-itemAwards">
                <span className="u-textAnimatedGradient">{edu[language].award}</span>
              </div>
              <div className="Studies-itemDateInfo">
                <h3>{edu.date}</h3>
              </div>
            </div>
          ))}
        </section>
        <section className="Studies-graduates">
          <h2 className="u-vitaeSubtitle">{studiesTranslation[language].graduatesTitle}</h2>
          <hr />
          {graduates.map((grd) => (
            <div
              key={grd.id}
              className="Studies-item"
            >
              <div className="Studies-itemMainInfo">
                <h3>{grd[language].graduateTitle}</h3>
                <h4>{grd[language].institution}</h4>
                <span>{grd[language].city}</span>
              </div>
              <div className="Studies-itemDateInfo">
                <h3>{grd[language].date}</h3>
                <span>{grd[language].duration}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
      <details>
        <summary className="u-vitaeSubtitle">{studiesTranslation[language].otherStudiesTitle}</summary>

        {otherStudies.map((edu) => (
          <React.Fragment key={edu.id}>
            <hr />
            <div className="Studies-item">
              <div className="Studies-itemMainInfo">
                <h3>{edu[language].name}</h3>
                <h4>{edu[language].institution}</h4>
                <span>{edu[language].city}</span>
              </div>
              <div className="Studies-itemDateInfo">
                <h3>{edu[language].date}</h3>
                <span>{edu[language].duration}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </details>
      <hr />
    </article>
  );
};

export default Studies;
