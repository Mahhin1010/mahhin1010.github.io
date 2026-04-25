import { Link } from "react-router-dom";

export default function ProjectCard({ project, variant = "normal" }) {
  const isWide = variant === "wide";

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group cursor-pointer block ${isWide ? "md:col-span-2" : ""}`}
    >
      <div
        className={`bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow ghost-border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl ${
          isWide ? "flex flex-col md:flex-row" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            isWide ? "md:w-1/2 min-h-[300px]" : "aspect-video"
          }`}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Badge for dashboard projects */}
          {project.dashboard && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-primary">
              Live Dashboard
            </div>
          )}
          {project.video && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-primary">
              Video Walkthrough
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${isWide ? "md:w-1/2 p-8 md:p-12 flex flex-col justify-center" : "p-8 md:p-10"}`}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className={`font-headline font-bold text-on-surface group-hover:text-primary transition-colors mb-4 ${
              isWide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          {/* Summary */}
          <p
            className={`text-on-surface-variant leading-relaxed ${
              isWide ? "text-base md:text-lg mb-10" : "mb-8"
            }`}
          >
            {project.summary}
          </p>

          {/* CTA */}
          <div className="flex items-center text-primary font-bold text-sm tracking-tight">
            Explore Project
            <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
