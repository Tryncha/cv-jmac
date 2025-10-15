import teachingActivityData from '../data/teachingActivity.json';
import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';
import React from 'react';

const teachingActivity = teachingActivityData.reverse();

const directionTranslation = {
  es: {
    title: 'Dirección de tesis y trabajos de fin de estudios'
  },
  en: {
    title: 'Thesis and Final Project Supervision'
  }
};

const Direction = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <Section title={directionTranslation[language].title}>
      {teachingActivity.map((act) => (
        <React.Fragment key={act.id}>
          <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
            <div className="flex flex-col xl:w-1/4">
              <h3 className="text-lg/6 font-bold">{act[language].institution}</h3>
              <span className="font-medium">{act[language].city}</span>
              <span className="font-medium">{act[language].date}</span>
            </div>
            <Separator />
            <div className="flex flex-col xl:w-3/4">
              <span className="font-medium">{act[language].type}</span>
              <h3 className="text-lg/6 font-bold">{act[language].name}</h3>
              <span className="font-medium">{act.student}</span>
            </div>
          </div>
          <hr className="my-2 border-slate-300 xl:hidden" />
        </React.Fragment>
      ))}
    </Section>
  );
};

export default Direction;
