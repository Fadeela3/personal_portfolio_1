import { Link } from 'react-router-dom';
export function HomePage() {
  return (
    <div className="pt-24 pb-12 max-w-5xl mx-auto px-4 text-center">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <p className="text-blue-400 font-medium mb-2">Hello, I'm Fadeela</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          I build scalable full-stack applications
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mb-6">
          Computer Science Graduate specializing in React, Node.js, and C/Systems Development. Focused on clean architecture and high-performance applications.
        </p>
        <Link 
            to="/projects" 
            className="inline-block bg-blue-900 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
          >
          View Projects
        </Link>
      </div>
    </div>
  );
}