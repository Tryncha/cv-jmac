import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Vitae from './pages/Vitae/Vitae';
import Memories from './pages/Memories/Memories';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

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
          path="/articles"
          element={<Home />}
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
