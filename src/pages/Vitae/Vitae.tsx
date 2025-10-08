import Studies from '../../components/Studies/Studies';
import Resume from '../../components/Resume/Resume';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Vitae.css';

const Vitae = () => {
  return (
    <main className="Vitae">
      <Resume />
      <Studies />
      <WorkExperience />
    </main>
  );
};

export default Vitae;
