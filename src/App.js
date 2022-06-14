import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'


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
    </div>
    </BrowserRouter>
  );
}

export default App;
