import Articles from './components/Articles/Articles';
import CurrentJob from './components/CurrentJob/CurrentJob';
import PreviousJobs from './components/PreviousJobs/PreviousJobs';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="">Jhon Mauricio Aguirre Cortés</a>
    </nav>
  );
};

const Hero = ({ heroImgSrc, heroImgAlt }) => {
  return (
    <div className="Hero">
      <img className="Hero-img" src={heroImgSrc} alt={heroImgAlt} />
    </div>
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
        <Hero
          heroImgSrc="jmac01.jpg"
          heroImgAlt="Foto de Jhon Mauricio Aguirre Cortés con un puente de fondo, usando gafas de sol."
        />
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
