import { useState, useMemo } from 'react';
import { projectsData } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage() {
  // State hooks for search input, category selection, and selected tech tags
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // All the unique categories/tags dynaimcally extracted from project data file
  const categories = useMemo(() => {
      const cats = new Set<string>();
      projectsData.forEach((p) => {
        p.category.forEach((c: string) => cats.add(c))
      });
      return ['All', ...Array.from(cats)];
    }, []);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projectsData.forEach((p) => {
      p.tags.forEach((t: string) => tagsSet.add(t))
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Toggle tech tag filter logic
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter project dynamically based on query, category, and selected technologies
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || project.category.includes(selectedCategory as Parameters<typeof project.category.includes>[0]);

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((t: string) => project.tags.includes(t));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  // Reset all active search and filter states
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTags([]);
  };

return (
    <div className="relative z-10 pt-28 pb-12 max-w-5xl mx-auto px-4 text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center tracking-tight">
          Projects
        </h1>
        <p className="text-slate-400 text-center max-w-xl mx-auto text-sm sm:text-base">
          Search or filter projects by technology stack and skill set.
        </p>
      </div>

      {/* Filter Control Box */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-10 backdrop-blur-md space-y-5">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects by title, description, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <svg
            className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Categories */}
        {categories.length > 1 && (
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Filter by Tags
            </p>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-[11px] px-2.5 py-1 rounded-md border transition-all ${
                      isSelected
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/80 font-medium'
                        : 'bg-slate-950/40 text-slate-500 border-slate-800/80 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Filters Summary & Reset */}
        {(searchQuery || selectedCategory !== 'All' || selectedTags.length > 0) && (
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
            <span>
              Showing {filteredProjects.length} of {projectsData.length} projects
            </span>
            <button
              onClick={resetFilters}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-900/30 border border-slate-800/60 rounded-2xl">
          <p className="text-slate-400 text-sm mb-3">No projects match your filter query.</p>
          <button
            onClick={resetFilters}
            className="text-xs bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}