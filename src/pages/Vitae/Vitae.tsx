import Education from '../../components/Education/Education';
import Resume from '../../components/Resume/Resume';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Vitae.css';

const Vitae = () => {
  return (
    <main className="Vitae">
      <Resume />
      <WorkExperience />
      <Education />
    </main>
  );
};

export default Vitae;
