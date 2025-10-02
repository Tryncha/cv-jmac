import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import WorkExperience from './components/WorkExperience/WorkExperience';

const App = () => {
  return (
    <>
      <main>
        <Aside />
        <section className="u-mainInfo">
          <Header />
          <Resume />
          <WorkExperience />
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
