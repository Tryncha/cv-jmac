import workExperienceData from '../data/workExperience.json';
import aboutInfoData from '../data/aboutInfo.json';

const aboutInfo = aboutInfoData;
const workExperience = workExperienceData.reverse();

const AboutMe = () => {
  return (
    <section className="u-flexColumn">
      <div className="u-flexRow">
        <div>
          <h3>Resumen</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis cum neque similique debitis, hic
            nobis, ipsa amet reprehenderit nostrum a deserunt eaque dolorem doloribus tenetur soluta possimus sapiente
            unde!
          </p>
        </div>
      </div>
    </section>
  );
};

const WorkExperience = () => {
  return (
    <section className="WorkExperience">
      <h2>Experiencia Laboral</h2>
      <hr />
      {workExperience.map((work) => (
        <div
          key={work.id}
          className="WorkExperience-job"
        >
          <div className="WorkExperience-jobMainInfo">
            <h3>{work.location}</h3>
            <div>{work.city}</div>
            <div>{work.date}</div>
            {work.duration ? <div>{work.duration}</div> : null}
          </div>
          <div className="WorkExperience-description">
            <h3>{work.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate provident laborum
              perspiciatis, quod id ab magni asperiores, ratione optio nam blanditiis delectus dolorum eaque ea mollitia
              error eum voluptates?
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const App = () => {
  return (
    <>
      <header>
        <h2>Jhon Mauricio Aguirre Cortés</h2>
        <h3>Doctor en Ingeniería Química</h3>
      </header>
      <main>
        <aside>
          <div className="u-circle"></div>
          <div className="u-links">
            <p>{aboutInfo.address}</p>
            <p>{aboutInfo.mobilePhone}</p>
            <p>{aboutInfo.email}</p>
          </div>
        </aside>
        <section className="u-mainInfo">
          <AboutMe />
          <WorkExperience />
          <WorkExperience />
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
