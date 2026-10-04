import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  //const hasImage = Boolean(project.imageUrl && project.imageUrl.trim() !== '');

  return (
    <div className="group relative bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col h-full">
      
      {/* Terminal Preview Header */}
      <div className="h-48 w-full bg-slate-950/80 border-b border-slate-800 overflow-hidden relative flex items-center justify-center p-3">
        <div className="w-full h-full rounded-lg bg-slate-900 border border-slate-800 p-3 font-mono text-xs text-slate-300 flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] text-slate-500">{project.id}.sh</span>
          </div>
          
          <div className="space-y-1.5 py-1 text-slate-400">
            <p className="text-emerald-400 flex items-center gap-1.5">
              <span>$</span>
              <span className="text-slate-200">{project.id} --status</span>
            </p>
            <p className="text-slate-500 truncate pl-3">
              [info] categories: {project.category.join(', ')}
            </p>
            <p className="text-blue-400/90 truncate pl-3">
              [success] compiled successfully
            </p>
          </div>

          <div className="flex items-center gap-1 text-emerald-400 pt-1 border-t border-slate-800/50 text-[11px]">
            <span>&gt;</span>
            <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          {/* Key Highlights */}
          <ul className="space-y-1 mb-4 text-xs text-slate-400">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-blue-400 select-none">•</span>
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags & Action Links */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          <div className="flex flex-wrap gap-1 justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1 text-xs font-medium">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}