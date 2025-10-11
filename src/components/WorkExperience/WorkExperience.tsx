import workExperienceData from '../../data/workExperience.json';
import useSettings from '../../hooks/useSettings';
import Separator from '../Separator/Separator';
import './WorkExperience.css';

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
    <article className="WorkExperience">
      <h2>{workExperienceTranslation[language].workExperienceTitle}</h2>
      <hr />
      {workExperience.map((work) => (
        <div
          key={work.id}
          className="WorkExperience-work"
        >
          <div className="WorkExperience-workMainInfo">
            <h3>{work[language].location}</h3>
            <span>{work[language].city}</span>
            <span>{work[language].date}</span>
          </div>
          <Separator />
          <div className="WorkExperience-workDescription">
            <h3>{work[language].name}</h3>
            <ul></ul>
          </div>
        </div>
      ))}
    </article>
  );
};

export default WorkExperience;
