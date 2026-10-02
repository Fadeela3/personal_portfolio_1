import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SpaceBackground } from './components/SpaceBackground';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-slate-100 bg-slate-950">
        <SpaceBackground />
        <Navbar />
        <main className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;