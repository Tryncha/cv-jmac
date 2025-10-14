import useSettings from '../hooks/useSettings';
import Separator from './Separator';
import investigationData from '../data/investigation.json';
import Section from './Section';

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
        <div
          key={inv.id}
          className="flex px-4 py-2 hover:rounded-sm hover:bg-slate-50"
        >
          <div className="flex w-1/4 flex-col">
            <h3 className="text-lg/6 font-bold">{inv[language].institution}</h3>
            <span className="font-medium">{inv[language].location}</span>
            <span className="font-medium">{inv[language].date}</span>
            <span className="font-medium">{inv[language].duration}</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col px-4">
            <span className="font-medium">{inv[language].area}</span>
            <a
              href={inv.url}
              target="_blank"
              className="text-lg/6 font-bold text-blue-800 underline transition-colors hover:text-blue-600"
            >
              {inv[language].groupName}
            </a>
            <span className="font-medium">{inv[language].department}</span>
            <span className="font-medium">Director: {inv[language].director}</span>
            <h3 className="mt-2 text-lg/6 font-bold">{investigationTranslation[language].linesTitle}: </h3>
            <ul className="ml-5 list-disc">
              {inv[language].lines.slice(0, VISIBLE_LINES).map((line) => (
                <li key={`${line}-${inv.id}`}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Investigation;
