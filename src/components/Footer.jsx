export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-headline font-bold text-on-surface text-lg">
            Mahhin Shahzad
          </span>
          <p className="font-label text-sm tracking-wide text-on-surface-variant">
            © {new Date().getFullYear()} Analytics Lead Portfolio. Built with
            precision.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/mahhin-shahzad-813451218/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mahhin1010"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="/pdf/Mahhin Resume .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span className="text-xs font-medium uppercase tracking-widest">
            Remote / Global
          </span>
        </div>
      </div>
    </footer>
  );
}
