import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="mb-12 animate-fade-in-up">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
          All Projects Archive
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          A complete backlog of my professional and personal work, spanning data engineering, financial analytics, and visual storytelling.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group flex flex-col md:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow ghost-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Image (Smaller aspect for list view) */}
            <div className="md:w-1/4 lg:w-1/5 relative overflow-hidden aspect-video md:aspect-auto h-48 md:h-auto">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <span className="text-primary font-bold tracking-widest text-[10px] uppercase bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-on-surface-variant text-sm font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  {project.date}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h2>
              
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-none max-w-4xl">
                {project.summary}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Explore button indicator */}
            <div className="hidden md:flex items-center justify-center px-8 border-l border-outline-variant/10 text-on-surface-variant group-hover:text-primary transition-colors">
               <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
                 arrow_forward
               </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
