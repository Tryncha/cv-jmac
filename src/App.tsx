import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Vitae from './pages/Vitae/Vitae';
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
          element={<Home />}
        />
        <Route
          path="/vitae"
          element={<Vitae />}
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
