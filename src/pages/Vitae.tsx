import About from '../components/About';
import Studies from '../components/Studies';
import WorkExperience from '../components/WorkExperience';
import Direction from '../components/Direction';
import Participation from '../components/Participation';
import Investigation from '../components/Investigation';

import scientificExperienceData from '../data/scientificExperience.json';
import { useSettings } from '../hooks/useSettings';
import Section from '../components/Section';
import Separator from '../components/Separator';
import React from 'react';

const scientificExperience = scientificExperienceData.reverse();

const directionTranslation = {
  es: {
    title: 'Experiencia científica'
  },
  en: {
    title: 'Scientific experience'
  }
};

const Vitae = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="main-page">
      <About />
      <Studies />
      <WorkExperience />
      <Section title={directionTranslation[language].title}>
        {scientificExperience.map((scExp) => (
          <React.Fragment key={scExp.id}>
            <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
              <div className="flex flex-col xl:w-1/4">
                <h3 className="text-lg/6 font-semibold">{scExp[language].institution}</h3>
                <span className="font-medium">{scExp[language].city}</span>
              </div>
              <Separator />
              <div className="flex flex-col xl:w-3/4">
                <h3 className="text-lg/6 font-semibold">{scExp[language].title}</h3>
              </div>
            </div>
            <hr className="my-2 border-slate-300 xl:hidden" />
          </React.Fragment>
        ))}
      </Section>
      <Investigation />
      <Direction />
      <Participation />
    </main>
  );
};

export default Vitae;
