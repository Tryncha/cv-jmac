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

interface TitulationProps {
  title: string;
  institution: string;
  city: string;
  award?: string;
  date: string;
}

const Titulation = ({ title, institution, city, award, date }: TitulationProps) => {
  return (
    <div className="TitulationItem">
      <div className="TitulationItem-mainInfo">
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <h4>{city}</h4>
      </div>
      <div className="TitulationItem-awards">
        <span className="u-textAnimatedGradient">{award}</span>
      </div>
      <div className="TitulationItem-dateInfo">
        <h3>{date}</h3>
      </div>
    </div>
  );
};

interface OtherItemProps {
  title: string;
  institution: string;
  city: string;
  date: string;
  duration: string;
}

const OtherStudyItem = ({ title, institution, city, date, duration }: OtherItemProps) => {
  return (
    <div className="OtherStudyItem">
      <div className="OtherStudyItem-mainInfo">
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <h4>{city}</h4>
      </div>
      <div className="OtherStudyItem-dateInfo">
        <h3>{date}</h3>
        <h4>{duration}</h4>
      </div>
    </div>
  );
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
          <Titulation
            key={edu.id}
            date={edu.date}
            {...edu[language]}
          />
        ))}
      </section>
      <section className="MainStudies-graduates">
        <h2>{studiesTranslation[language].graduatesTitle}</h2>
        <hr />
        {graduates.map((grd) => (
          <OtherStudyItem
            key={grd.id}
            {...grd[language]}
          />
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
            <OtherStudyItem {...edu[language]} />
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
