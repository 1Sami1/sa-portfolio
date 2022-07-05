import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import bg from '../src/images/bg-image.png'
import FooterNav from './components/FooterNav';
import FooterText from './components/FooterText'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <main>
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </main>
      <FooterNav />
      <FooterText />
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
