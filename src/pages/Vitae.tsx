import About from '../components/About';
import Studies from '../components/Studies';
import WorkExperience from '../components/WorkExperience';
import Direction from '../components/Direction';
import Participation from '../components/Participation';
import Investigation from '../components/Investigation';

const Vitae = () => {
  return (
    <main className="z-10 flex min-h-screen flex-col gap-5 border-x border-slate-300 bg-white px-6 pt-40 pb-10 shadow-sm xl:mx-20 xl:px-15 xl:pt-46">
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
