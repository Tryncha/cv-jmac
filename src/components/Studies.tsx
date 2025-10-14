import React from 'react';
import educationData from '../data/education.json';
import graduatesData from '../data/graduates.json';
import otherStudiesData from '../data/otherStudies.json';
import { useSettings } from '../hooks/useSettings';
import Section from './Section';

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
    <div className="flex items-center justify-between px-4 py-2 hover:rounded-sm hover:bg-slate-50">
      <div className="flex w-1/2 flex-col">
        <h3 className="text-lg/6 font-bold">{title}</h3>
        <span className="font-medium">{institution}</span>
        <span className="font-medium">{city}</span>
      </div>
      <div className="w-1/4 text-center font-semibold">
        <span className="u-textAnimatedGradient">{award}</span>
      </div>
      <div className="flex w-1/4 flex-col items-end justify-center">
        <span className="text-lg font-bold">{date}</span>
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
    <div className="flex items-center justify-between px-4 py-2 hover:rounded-sm hover:bg-slate-50">
      <div className="flex w-3/4 flex-col">
        <h3 className="text-lg/6 font-bold">{title}</h3>
        <span className="font-medium">{institution}</span>
        <span className="font-medium">{city}</span>
      </div>
      <div className="flex w-1/4 flex-col items-end justify-center">
        <span className="text-lg/6 font-bold">{date}</span>
        <span className="font-medium">{duration}</span>
      </div>
    </div>
  );
};

const MainStudies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section className="flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-12">
      <Section title={studiesTranslation[language].educationTitle}>
        {education.map((edu) => (
          <Titulation
            key={edu.id}
            date={edu.date}
            {...edu[language]}
          />
        ))}
      </Section>
      <Section title={studiesTranslation[language].graduatesTitle}>
        {graduates.map((grd) => (
          <OtherStudyItem
            key={grd.id}
            {...grd[language]}
          />
        ))}
      </Section>
    </section>
  );
};

const OtherStudies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="OtherStudies">
      <details>
        <summary className="my-2 text-2xl font-bold uppercase transition-colors hover:cursor-pointer hover:text-slate-900">
          {studiesTranslation[language].otherStudiesTitle}
        </summary>
        {otherStudies.map((edu) => (
          <React.Fragment key={edu.id}>
            <hr className="my-2 border-slate-300" />
            <OtherStudyItem {...edu[language]} />
          </React.Fragment>
        ))}
      </details>
      <hr className="my-2 border-slate-300" />
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
