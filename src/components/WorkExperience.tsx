import workExperienceData from '../data/workExperience.json';
import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';
import React from 'react';

const workExperience = workExperienceData.reverse();

const workExperienceTranslation = {
  es: {
    workExperienceTitle: 'Experiencia Laboral'
  },
  en: {
    workExperienceTitle: 'Work Experience'
  }
};

const WorkExperience = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <Section title={workExperienceTranslation[language].workExperienceTitle}>
      {workExperience.map((work) => (
        <React.Fragment key={work.id}>
          <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
            <div className="flex flex-col xl:w-1/4">
              <h3 className="text-lg/6 font-bold">{work[language].location}</h3>
              <span className="font-medium">{work[language].city}</span>
            </div>
            <Separator />
            <div className="flex flex-col xl:w-3/4">
              <h3 className="text-lg/6 font-bold">{work[language].name}</h3>
              <ul className="mt-1 ml-4 list-disc">
                {work[language].description?.map((desc) => (
                  <li key={`${desc}-${work.id}`}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-2 border-slate-300 xl:hidden" />
        </React.Fragment>
      ))}
    </Section>
  );
};

export default WorkExperience;
