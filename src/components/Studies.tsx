import React from 'react';
import Section from './Section';
import educationData from '../data/education.json';
import graduatesData from '../data/graduates.json';
import otherStudiesData from '../data/otherStudies.json';
import { useSettings } from '../hooks/useSettings';

const education = educationData.reverse();
const graduates = graduatesData.reverse();
const otherStudies = otherStudiesData.reverse();

const studiesTranslation = {
  es: {
    educationTitle: 'Educación',
    graduatesTitle: 'Diplomados',
    otherStudiesTitle: 'Cursos y Conferencias Científicas'
  },
  en: {
    educationTitle: 'Education',
    graduatesTitle: 'Graduates',
    otherStudiesTitle: 'Scientific Courses and Conferences'
  }
};

interface StudyItemProps {
  title: string;
  institution: string;
  city: string;
  award?: string;
  date?: string;
}

const StudyItem = ({ title, institution, city, award, date }: StudyItemProps) => {
  return (
    <div className="flex flex-col justify-between p-4 text-center hover:rounded-sm hover:bg-slate-50 md:flex-row md:py-2 md:text-left">
      <div className="flex flex-col">
        <h3 className="text-lg/6 font-semibold">{title}</h3>
        <span>{institution}</span>
        <span>{city}</span>
      </div>
      <div className="flex flex-col justify-center md:w-1/3 md:items-end">
        <span className="font-semibold">{date}</span>
        <span className="font-semibold text-amber-700">{award}</span>
      </div>
    </div>
  );
};

const Studies = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-8 2xl:flex-row 2xl:justify-between">
        <Section title={studiesTranslation[language].educationTitle}>
          {education.map((edu) => (
            <StudyItem
              key={edu.id}
              {...edu[language]}
            />
          ))}
        </Section>
        <Section title={studiesTranslation[language].graduatesTitle}>
          {graduates.map((grd) => (
            <StudyItem
              key={grd.id}
              {...grd[language]}
            />
          ))}
        </Section>
      </div>
      <section>
        <details>
          <summary className="my-2 px-4 text-center text-2xl font-bold uppercase transition-colors hover:cursor-pointer hover:text-slate-900 md:text-left">
            {studiesTranslation[language].otherStudiesTitle}
          </summary>
          {otherStudies.map((edu) => (
            <React.Fragment key={edu.id}>
              <hr className="my-2 border-slate-300" />
              <StudyItem {...edu[language]} />
            </React.Fragment>
          ))}
        </details>
        <hr className="my-2 border-slate-300" />
      </section>
    </article>
  );
};

export default Studies;
