/**
 * ProjectDetail — Dynamic project detail page with tabbed navigation.
 *
 * Tab priority (default selection):
 *   video → dashboard → notebook → caseStudy → gallery → (first available)
 *
 * Only tabs with actual content are rendered.
 */
import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import TabBar from "../components/TabBar";
import DashboardEmbed from "../components/DashboardEmbed";
import VideoEmbed from "../components/VideoEmbed";
import ImageCarousel from "../components/ImageCarousel";
import NotebookEmbed from "../components/NotebookEmbed";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  // ── Build the list of tabs dynamically ──
  const tabs = useMemo(() => {
    if (!project) return [];
    const t = [];

    if (project.video) {
      t.push({ id: "video", label: "Project Video", icon: "play_circle", iconFill: true });
    }
    if (project.dashboard) {
      t.push({ id: "dashboard", label: "Interactive Dashboard", icon: "leaderboard" });
    }
    if (project.notebook) {
      t.push({ id: "notebook", label: "Open Notebook", icon: "description" });
    }
    if (project.caseStudy) {
      t.push({ id: "case-study", label: "Case Study", icon: "auto_stories" });
    }
    if (project.gallery) {
      t.push({ id: "gallery", label: "Gallery", icon: "photo_library" });
    }

    // External link tabs
    if (project.linkedin) {
      t.push({ id: "linkedin", label: "LinkedIn Post", icon: "open_in_new", external: project.linkedin });
    }
    if (project.medium) {
      t.push({ id: "medium", label: "Medium Article", icon: "article", external: project.medium });
    }
    if (project.github) {
      t.push({ id: "github", label: "GitHub", icon: "code", external: project.github });
    }
    if (project.downloadLink) {
      t.push({ id: "download", label: project.downloadLink.label, icon: "download", external: project.downloadLink.url });
    }

    return t;
  }, [project]);

  // Default tab: first non-external tab
  const defaultTab = tabs.find((t) => !t.external)?.id || "";
  const [activeTab, setActiveTab] = useState(defaultTab);

  // ── Generate case study images array from folder config ──
  const caseStudyImages = useMemo(() => {
    if (!project?.caseStudy) return [];
    return Array.from({ length: project.caseStudy.count }, (_, i) =>
      `${project.caseStudy.folder}/${i + 1}.jpg`
    );
  }, [project]);

  // ── 404 fallback ──
  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center max-w-2xl mx-auto px-8">
        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6 block">
          search_off
        </span>
        <h1 className="font-headline text-4xl font-bold mb-4">
          Project Not Found
        </h1>
        <p className="text-on-surface-variant mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-[0.75rem] font-semibold"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* ── Header ── */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-4 text-on-surface-variant font-label text-sm">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                <span className="text-primary font-semibold">
                  {project.category}
                </span>
              </nav>

              {/* Category + Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">
                  {project.category}
                </span>
                <span className="text-outline-variant">·</span>
                <span className="text-on-surface-variant text-sm">
                  📅 {project.date}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tighter">
                {project.title}
              </h1>
            </div>

            {/* Share button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              className="flex items-center gap-2 bg-surface-container-high px-5 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors self-start"
            >
              <span className="material-symbols-outlined text-xl">share</span>
              <span className="text-sm font-semibold">Share</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-surface-container-high rounded-md font-label text-sm text-on-surface-variant font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tab Bar */}
          {tabs.length > 0 && (
            <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          )}
        </section>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left: Active Tab Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Render active tab content */}
            {activeTab === "video" && project.video && (
              <VideoEmbed video={project.video} />
            )}
            {activeTab === "dashboard" && project.dashboard && (
              <DashboardEmbed dashboard={project.dashboard} />
            )}
            {activeTab === "notebook" && project.notebook && (
              <NotebookEmbed notebook={project.notebook} />
            )}
            {activeTab === "case-study" && caseStudyImages.length > 0 && (
              <ImageCarousel
                images={caseStudyImages}
                title={`${project.title} Case Study`}
                aspectRatio={project.caseStudy.aspectRatio}
              />
            )}
            {activeTab === "gallery" && project.gallery && (
              <ImageCarousel
                images={project.gallery}
                title={`${project.title} Gallery`}
              />
            )}

            {/* Description section */}
            <div className="bg-white/50 p-6 md:p-8 rounded-2xl border border-outline-variant/10">
              <h2 className="text-xl md:text-2xl font-headline font-bold mb-5">
                Project Details
              </h2>
              <ul className="space-y-4">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Video Preview (if video exists and not already active) */}
            {project.video && activeTab !== "video" && (
              <button
                onClick={() => setActiveTab("video")}
                className="w-full relative aspect-video rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer shadow-md"
              >
                <img
                  src={project.coverImage}
                  alt="Video Preview"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-14 h-14 bg-primary text-on-primary rounded-[0.75rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-[10px] font-medium opacity-80 uppercase tracking-widest text-white">
                    Deep-Dive
                  </p>
                  <h3 className="text-sm font-bold text-white">Watch Video</h3>
                </div>
              </button>
            )}

            {/* Dashboard Preview (if dashboard exists and not already active) */}
            {project.dashboard && activeTab !== "dashboard" && (
              <button
                onClick={() => setActiveTab("dashboard")}
                className="w-full relative aspect-video rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer shadow-md"
              >
                <img
                  src={project.coverImage}
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-14 h-14 bg-primary text-on-primary rounded-[0.75rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">
                      leaderboard
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-[10px] font-medium opacity-80 uppercase tracking-widest text-white">
                    Interactive
                  </p>
                  <h3 className="text-sm font-bold text-white">
                    View Dashboard
                  </h3>
                </div>
              </button>
            )}

            {/* Architecture Blueprint */}
            {project.architecture && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-on-surface px-1 font-headline">
                  Architecture Blueprint
                </h3>
                {project.architecture.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">
                          {item.icon}
                        </span>
                      </div>
                      <h4 className="font-bold text-on-surface font-headline">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-surface-container-high px-2.5 py-1 rounded-md text-[10px] font-bold text-on-surface-variant uppercase tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* External Links */}
            <div className="space-y-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-primary">
                    code
                  </span>
                  <span className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
                    View on GitHub
                  </span>
                  <span className="material-symbols-outlined text-sm ml-auto text-on-surface-variant">
                    open_in_new
                  </span>
                </a>
              )}
              {project.medium && (
                <a
                  href={project.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-primary">
                    article
                  </span>
                  <span className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
                    Read on Medium
                  </span>
                  <span className="material-symbols-outlined text-sm ml-auto text-on-surface-variant">
                    open_in_new
                  </span>
                </a>
              )}
              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-[#0A66C2]">
                    open_in_new
                  </span>
                  <span className="font-semibold text-sm text-on-surface group-hover:text-[#0A66C2] transition-colors">
                    View LinkedIn Post
                  </span>
                  <span className="material-symbols-outlined text-sm ml-auto text-on-surface-variant">
                    open_in_new
                  </span>
                </a>
              )}
              {project.downloadLink && (
                <a
                  href={project.downloadLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-primary">
                    download
                  </span>
                  <span className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
                    {project.downloadLink.label}
                  </span>
                  <span className="material-symbols-outlined text-sm ml-auto text-on-surface-variant">
                    download
                  </span>
                </a>
              )}
            </div>

            {/* Back to all projects */}
            <Link
              to="/"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-semibold text-sm mt-4"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Back to all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
