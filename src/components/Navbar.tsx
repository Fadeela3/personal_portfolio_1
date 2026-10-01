import { NavLink } from 'react-router-dom';

export function Navbar() {
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? 'text-white bg-white/10 border border-white/10'
        : 'text-slate-400 hover:text-white'
    }`;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-slate-900/80 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkStyles}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={linkStyles}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
}