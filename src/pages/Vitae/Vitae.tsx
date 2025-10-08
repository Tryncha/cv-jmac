import Studies from '../../components/Studies/Studies';
import Resume from '../../components/Resume/Resume';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Vitae.css';
import Direction from '../../components/Direction/Direction';

const Vitae = () => {
  return (
    <main className="Vitae">
      <Resume />
      <Studies />
      <WorkExperience />
      <Direction />
    </main>
  );
};

export default Vitae;
