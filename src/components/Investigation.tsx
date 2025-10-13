import useSettings from '../hooks/useSettings';
import Separator from './Separator/Separator';
import investigationData from '../data/investigation.json';

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
    <section>
      <h2>{investigationTranslation[language].title}</h2>
      <hr />
      {investigation.map((inv) => (
        <div
          key={inv.id}
          className="my-6 flex gap-5"
        >
          <div className="flex w-1/4 flex-col">
            <h3>{inv[language].institution}</h3>
            <span>{inv[language].location}</span>
            <span>{inv[language].date}</span>
            <span>{inv[language].duration}</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col">
            <span>{inv[language].area}</span>
            <h3>
              <a
                href={inv.url}
                target="_blank"
              >
                {inv[language].groupName}
              </a>
            </h3>
            <h4>{inv[language].department}</h4>
            <h4>Director: {inv[language].director}</h4>
            <h3 className="mt-3 mb-1">{investigationTranslation[language].linesTitle}: </h3>
            <ul className="ml-5 list-disc">
              {inv[language].lines.slice(0, VISIBLE_LINES).map((line) => (
                <li key={`${line}-${inv.id}`}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Investigation;
