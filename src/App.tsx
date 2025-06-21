import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import PortfolioHomepage from './Components/Home';
import AboutPage from './Components/About';
import ServicesPage from './Components/Services';
import ContactPage from './Components/Contact';
import ProjectsPage from './Components/Projects';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;