import React from 'react';
import educationData from '../data/education.json';
import graduatesData from '../data/graduates.json';
import otherStudiesData from '../data/otherStudies.json';
import useSettings from '../hooks/useSettings';
import VitaeSection from './VitaeSection';

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
    <div className="my-4 flex items-center justify-between">
      <div className="flex w-1/2 flex-col">
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <h4>{city}</h4>
      </div>
      <div className="w-1/3 text-center font-semibold">
        <span className="u-textAnimatedGradient">{award}</span>
      </div>
      <div className="flex w-[15%] flex-col items-end justify-center">
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
    <div className="my-4 flex items-center justify-between gap-5">
      <div className="flex w-3/4 flex-col">
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <h4>{city}</h4>
      </div>
      <div className="flex w-1/4 flex-col items-end justify-center">
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
    <section className="flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-8">
      <VitaeSection title={studiesTranslation[language].educationTitle}>
        {education.map((edu) => (
          <Titulation
            key={edu.id}
            date={edu.date}
            {...edu[language]}
          />
        ))}
      </VitaeSection>
      <VitaeSection title={studiesTranslation[language].graduatesTitle}>
        {graduates.map((grd) => (
          <OtherStudyItem
            key={grd.id}
            {...grd[language]}
          />
        ))}
      </VitaeSection>
    </section>
  );
};

const OtherStudies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="OtherStudies">
      <details>
        <summary className="my-2 text-2xl font-bold uppercase">
          {studiesTranslation[language].otherStudiesTitle}
        </summary>
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
    <article className="flex flex-col gap-4">
      <MainStudies />
      <OtherStudies />
    </article>
  );
};

export default Studies;
