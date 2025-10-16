import { Routes, Route } from 'react-router';
import Header from './overlay/Header';
import Vitae from './pages/Vitae';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './overlay/Footer';
import { useScrollReset } from './hooks/useScrollReset';

const App = () => {
  useScrollReset();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Vitae />}
        />
        <Route
          path="/publications"
          element={<Publications />}
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
