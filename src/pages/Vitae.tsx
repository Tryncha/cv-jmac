import About from '../components/About';
import Studies from '../components/Studies';
import WorkExperience from '../components/WorkExperience';
import Direction from '../components/Direction';
import Participation from '../components/Participation';
import Investigation from '../components/Investigation';

const Vitae = () => {
  return (
    <main className="main-page">
      <About />
      <Studies />
      <WorkExperience />
      <Investigation />
      <Direction />
      <Participation />
    </main>
  );
};

export default Vitae;
