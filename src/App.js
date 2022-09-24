import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import FooterNav from './components/FooterNav';
import FooterText from './components/FooterText'
import FilmfanPage from './pages/SingleProject/FilmfanPage';
import PortfolioPage from './pages/SingleProject/PortfolioPage';
import CapstonePage from './pages/SingleProject/CapstonePage';
import ScrollToTop from './components/ScrollToTop';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Header />
      <ScrollToTop />
      <main>
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/FilmfanDB" element={<FilmfanPage />}/>
              <Route path="/Portfolio" element={<PortfolioPage />}/>
              <Route path="/Capstone" element={<CapstonePage />}/>
              <Route path='*' element={<Page404 />}/>
          </Routes>
      </main>
      <FooterNav />
      <FooterText />
    </div>
    </BrowserRouter>
  );
}

export default App;
