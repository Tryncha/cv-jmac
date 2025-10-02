import educationData from '../../../data/education.json';
import './Education.css';

const education = educationData;

const Education = () => {
  console.log(education);
  console.log(educationData);

  return (
    <section className="Education">
      <h2 className="u-sectionTitle">Educación</h2>
      <hr />
      {education.map((edu) => (
        <div
          key={edu.id}
          className="Education-item"
        >
          <div className="Education-mainInfo">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <span>{edu.city}</span>
          </div>
          <div className="Education-dateInfo">
            <h3>{edu.date}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
