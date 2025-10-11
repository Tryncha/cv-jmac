import About from '../../components/About/About';
import Studies from '../../components/Studies/Studies';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Direction from '../../components/Direction/Direction';
import './Vitae.css';

const Vitae = () => {
  return (
    <main className="Vitae">
      <About />
      <Studies />
      <WorkExperience />
      <Direction />
    </main>
  );
};

export default Vitae;
