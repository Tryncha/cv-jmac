import { Routes, Route } from 'react-router';
import Header from './overlay/Header/Header';
import Vitae from './pages/Vitae';
import Resume from './pages/Profile';
import Articles from './pages/Articles';
import Media from './pages/Media';
import Memories from './pages/Memories/Memories';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Footer from './overlay/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Vitae />}
        />
        <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="/articles"
          element={<Articles />}
        />
        <Route
          path="/media"
          element={<Media />}
        />
        <Route
          path="/memories"
          element={<Memories />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
