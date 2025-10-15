import directionData from '../data/direction.json';
import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';
import React from 'react';

const direction = directionData.reverse();

const directionTranslation = {
  es: {
    title: 'Dirección de tesis y trabajos de fin de estudios',
    student: 'Estudiante'
  },
  en: {
    title: 'Thesis and Final Project Supervision',
    student: 'Student'
  }
};

const Direction = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <Section title={directionTranslation[language].title}>
      {direction.map((act) => (
        <React.Fragment key={act.id}>
          <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
            <div className="flex flex-col xl:w-1/4">
              <h3 className="text-lg/6 font-semibold">{act[language].institution}</h3>
              <span className="font-medium">{act[language].city}</span>
            </div>
            <Separator />
            <div className="flex flex-col xl:w-3/4">
              <h3 className="text-lg/6 font-semibold">{act[language].name}</h3>
              <span className="font-medium">
                {directionTranslation[language].student}: {act.student}
              </span>
              <span className="font-medium">{act[language].type}</span>
            </div>
          </div>
          <hr className="my-2 border-slate-300 xl:hidden" />
        </React.Fragment>
      ))}
    </Section>
  );
};

export default Direction;
