import Articles from './components/Articles/Articles';
import Carousel from './components/Carousel/Carousel';
import CurrentJob from './components/CurrentJob/CurrentJob';
import PreviousJobs from './components/PreviousJobs/PreviousJobs';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="">Jhon Mauricio Aguirre Cortés</a>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-links">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Vitae</a>
        <a href="">Contact</a>
      </div>
      <span className="Footer-copyright">&copy; 2025 - Jhon Mauricio Aguirre Cortés</span>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Carousel />
      </header>
      <main>
        <CurrentJob />
        <hr className="u-hr" />
        <PreviousJobs />
        <hr className="u-hr" />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default App;
