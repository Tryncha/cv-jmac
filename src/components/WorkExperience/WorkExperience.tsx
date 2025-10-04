import workExperienceData from '../../data/workExperience.json';
import useLanguage from '../../hooks/useLanguage';
import Section from '../Section/Section';
import Separator from './Separator/Separator';
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
  const { language } = useLanguage();

  return (
    <Section title={workExperienceTranslation[language].workExperienceTitle}>
      {workExperience.map((work) => (
        <div
          key={work.id}
          className="WorkExperience-work"
        >
          <div className="WorkExperience-workMainInfo">
            <h3>{work[language].location}</h3>
            <span>{work[language].city}</span>
            <span>{work[language].date}</span>
            {/* {work.duration ? <div>{work.duration}</div> : null} */}
          </div>
          <Separator />
          <div className="WorkExperience-workDescription">
            <h3>{work[language].name}</h3>
            <p></p>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default WorkExperience;
