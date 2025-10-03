import Education from '../../components/Education/Education';
import Resume from '../../components/Resume/Resume';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Vitae.css';

const Vitae = () => {
  return (
    <main className="Vitae">
      {/* <Aside /> */}
      {/* <section className="u-mainInfo"> */}
      <Resume />
      <WorkExperience />
      <Education />
      {/* </section> */}
    </main>
  );
};

export default Vitae;
