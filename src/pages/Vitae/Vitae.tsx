import Resume from '../../components/Resume/Resume';
import Studies from '../../components/Studies/Studies';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Direction from '../../components/Direction/Direction';
import './Vitae.css';

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
