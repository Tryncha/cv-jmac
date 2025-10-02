import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import WorkExperience from './components/WorkExperience/WorkExperience';

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Aside /> */}
        {/* <section className="u-mainInfo"> */}
        <Resume />
        <WorkExperience />
        <Education />
        {/* </section> */}
      </main>
      <footer>
        <div>
          <a href="">Home</a>
          <a href="">Vitae</a>
          <a href="">Contact</a>
        </div>
        <span>&copy; 2025 - Jhon Mauricio Aguirre Cortés</span>
      </footer>
    </>
  );
};

export default App;
