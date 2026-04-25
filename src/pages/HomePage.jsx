import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  return (
    <div className="pt-32">
      {/* ═══ HERO SECTION ═══ */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 animate-fade-in-up">
            <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">
              Analytics Engineer & BI Lead
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
              Mahhin Shahzad
              <br />
              <span className="text-outline-variant">
                Architecting Intelligence.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-body">
              Turning complex data ecosystems into actionable strategic
              narratives. Specialist in scalable ETL pipelines, financial data
              architecture, and high-impact visual storytelling.
            </p>
            <div className="flex flex-wrap gap-4 mt-12">
              <a
                href="/pdf/Mahhin Resume .pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-[0.75rem] font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">
                  description
                </span>
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mahhin-shahzad-813451218/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-7 py-3.5 rounded-[0.75rem] font-semibold hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-xl">link</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/Mahhin1010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface-container-low text-on-surface px-7 py-3.5 rounded-[0.75rem] font-semibold border border-outline-variant/20 hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-xl">code</span>
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-4 hidden lg:block animate-fade-in-up animate-delay-200">
            <div className="relative flex justify-center items-center h-full">
              <img
                src="/images/Mahhin_Profile_New.png"
                alt="Mahhin Shahzad"
                className="w-full max-w-[340px] object-contain mix-blend-multiply drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* ═══ PROJECTS GRID ═══ */}
      <section id="projects" className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
                Selected Works
              </h2>
              <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
            </div>
            <p className="font-label text-on-surface-variant max-w-xs text-right hidden md:block">
              A curated collection of projects focusing on data engineering,
              financial analytics, and visual storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={index === 2 || index === projects.length - 1 ? "wide" : "normal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERTISE TICKER ═══ */}
      <section className="py-16 border-y border-outline-variant/10 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[
            "Statistical Modeling",
            "Data Engineering",
            "Business Intelligence",
            "ETL Architecture",
            "Machine Learning",
            "Financial Analytics",
            "Power BI",
            "Python",
            "Statistical Modeling",
            "Data Engineering",
            "Business Intelligence",
            "ETL Architecture",
            "Machine Learning",
            "Financial Analytics",
            "Power BI",
            "Python",
          ].map((text, i) => (
            <span
              key={i}
              className={`font-headline text-3xl md:text-4xl font-extrabold uppercase tracking-widest mx-8 md:mx-12 ${
                i % 2 === 0 ? "opacity-20" : "text-primary opacity-25"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT SECTION ═══ */}
      <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <div className="bg-surface-container rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-8 tracking-tight">
              About Me
            </h2>
            <div className="space-y-5 text-on-surface-variant leading-relaxed text-base md:text-lg">
              <p>
                I'm Mahhin Shahzad — Analytics Engineer & Financial Data
                Specialist.
              </p>
              <p>
                With a Computer Science foundation (3.8 CGPA) and 3 years
                leading BI in Fintech, I specialise in turning messy financial
                data into scalable, trustworthy architecture — bridging the gap
                between raw numbers and the systems that make sense of them.
              </p>
              <p>
                My domain is financial data: Budgeting, ARR/MRR tracking, and
                AR/AP analysis — built on a Single Source of Truth that the whole
                business can rely on.
              </p>
              <p>
                I work at the intersection of modern Analytics Engineering and
                smart data infrastructure, going beyond dashboards to deliver
                the executive and operational insight that drives real decisions.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mb-32 -mr-32" />
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="max-w-3xl mx-auto px-6 md:px-8 pb-24 text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-on-surface-variant mb-8">
          Interested in working together or discussing data architecture? Reach
          out via LinkedIn or email.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/mahhin-shahzad-813451218/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0A66C2] text-white px-8 py-3.5 rounded-[0.75rem] font-semibold hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">open_in_new</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/Mahhin1010"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-on-surface text-white px-8 py-3.5 rounded-[0.75rem] font-semibold hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
