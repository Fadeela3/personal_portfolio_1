import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
const featuredProjects = projectsData.filter((project) => project.featured); // These are all the featured projects (where project.featured == true)

  return (
    <div className='relative z-10 max-w-6xl mx-auto px-4 text-slate-100'>
      {/* Hero Section */}
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

      {/* Featured Project Section */}
      <section className="py-12 border-t border-slate-800/80">
        <div className="relative mb-16 flex flex-col items-center sm:block">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-3">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A selection of full-stack applications, security exploits, dynamic programming agents, and low-level systems programming.
            </p>
          </div>

          <Link
            to="/projects"
            className="mt-3 sm:mt-0 sm:absolute sm:right-0 sm:bottom-0 sm:translate-y-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            View all projects &rarr;
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA to Projects Page */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block bg-blue-900 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
          >
            Explore Full Project Archive ({projectsData.length})
          </Link>
        </div>
      </section>

    </div>  
  );
}