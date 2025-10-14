import teachingActivityData from '../data/teachingActivity.json';
import useSettings from '../hooks/useSettings';
import Separator from './Separator';
import VitaeSection from './VitaeSection';

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
    <VitaeSection title={directionTranslation[language].title}>
      {teachingActivity.map((act) => (
        <div
          key={act.id}
          className="flex px-4 py-2 hover:rounded-sm hover:bg-slate-50"
        >
          <div className="flex w-1/4 flex-col">
            <h3 className="text-lg/6 font-bold">{act[language].institution}</h3>
            <span className="font-medium">{act[language].city}</span>
            <span className="font-medium">{act[language].date}</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col px-4">
            <span className="font-medium">{act[language].type}</span>
            <h3 className="text-lg/6 font-bold">{act[language].name}</h3>
            <span className="font-medium">{act.student}</span>
          </div>
        </div>
      ))}
    </VitaeSection>
  );
};

export default Direction;
