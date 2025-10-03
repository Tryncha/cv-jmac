import workExperienceData from '../../../data/workExperience.json';
import Section from '../Section/Section';
import Separator from '../Separator/Separator';
import './WorkExperience.css';

const workExperience = workExperienceData.reverse();

const WorkExperience = () => {
  return (
    <Section title="Experiencia Laboral">
      {workExperience.map((work) => (
        <div
          key={work.id}
          className="WorkExperience-work"
        >
          <div className="WorkExperience-workMainInfo">
            <h3>{work.location}</h3>
            <span>{work.city}</span>
            <span>{work.date}</span>
            {/* {work.duration ? <div>{work.duration}</div> : null} */}
          </div>
          <Separator />
          <div className="WorkExperience-workDescription">
            <h3>{work.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate provident laborum
              perspiciatis, quod id ab magni asperiores, ratione optio nam blanditiis delectus dolorum eaque ea mollitia
              error eum voluptates?
            </p>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default WorkExperience;
