import Education from '../../components/Education/Education';
import Resume from '../../components/Resume/Resume';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Vitae.css';

const Vitae = () => {
  return (
    <main className="Vitae">
      <Resume />
      <Education />
      <WorkExperience />
    </main>
  );
};

export default Vitae;
