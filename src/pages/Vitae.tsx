import About from '../components/About';
import Studies from '../components/Studies';
import WorkExperience from '../components/WorkExperience';
import Direction from '../components/Direction';
import Participation from '../components/Participation';
import Investigation from '../components/Investigation';

const Vitae = () => {
  return (
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 md:pt-36 xl:mx-12 xl:px-12 xl:pt-28">
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
