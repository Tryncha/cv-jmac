import workExperienceData from '../../data/workExperience.json';
import useSettings from '../../hooks/useSettings';
import Separator from '../Separator/Separator';
import Title from '../Title';

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
    <article>
      <Title>{workExperienceTranslation[language].workExperienceTitle}</Title>
      <hr className="my-2" />
      {workExperience.map((work) => (
        <div
          key={work.id}
          className="my-8 flex gap-5"
        >
          <div className="flex w-1/4 flex-col gap-1">
            <h3>{work[language].location}</h3>
            <span>{work[language].city}</span>
            <span>{work[language].date}</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col gap-1">
            <h3>{work[language].name}</h3>
            <ul></ul>
          </div>
        </div>
      ))}
    </article>
  );
};

export default WorkExperience;
