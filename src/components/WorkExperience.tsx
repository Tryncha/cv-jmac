import workExperienceData from '../data/workExperience.json';
import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';

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
        <div
          key={work.id}
          className="flex px-4 py-2 hover:rounded-sm hover:bg-slate-50"
        >
          <div className="flex w-1/4 flex-col">
            <h3 className="text-lg/6 font-bold">{work[language].location}</h3>
            <span className="font-medium">{work[language].city}</span>
            <span className="font-medium">{work[language].date}</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col px-4">
            <h3 className="mb-1 text-lg/6 font-bold">{work[language].name}</h3>
            <ul className="ml-5 list-disc">
              {work[language].description?.map((desc) => (
                <li key={`${desc}-${work.id}`}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default WorkExperience;
