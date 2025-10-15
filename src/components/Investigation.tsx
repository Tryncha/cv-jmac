import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import investigationData from '../data/investigation.json';
import Section from './Section';
import React from 'react';

const investigation = investigationData.reverse();

const investigationTranslation = {
  es: {
    title: 'Grupos de Investigación',
    linesTitle: 'Líneas de investigación'
  },
  en: {
    title: 'Research Groups',
    linesTitle: 'Research Lines'
  }
};

const Investigation = () => {
  const { settings } = useSettings();
  const { language } = settings;

  const VISIBLE_LINES = 5;

  return (
    <Section title={investigationTranslation[language].title}>
      {investigation.map((inv) => (
        <React.Fragment key={inv.id}>
          <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
            <div className="flex flex-col xl:w-1/4">
              <h3 className="text-lg/6 font-semibold">{inv[language].institution}</h3>
              <span className="font-medium">{inv[language].location}</span>
            </div>
            <Separator />
            <div className="flex flex-col xl:w-3/4">
              <span className="font-medium">{inv[language].area}</span>
              <a
                href={inv.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg/6 font-bold text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {inv[language].groupName}
              </a>
              <span className="font-medium">{inv[language].department}</span>
              <span className="font-medium">Director: {inv[language].director}</span>
              <h3 className="mt-2 text-lg/6 font-semibold">{investigationTranslation[language].linesTitle}: </h3>
              <ul className="ml-4 list-disc">
                {inv[language].lines.slice(0, VISIBLE_LINES).map((line) => (
                  <li key={`${line}-${inv.id}`}>{line}</li>
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

export default Investigation;
