import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.hash === path.replace("/", "");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-on-surface font-headline hover:text-primary transition-colors"
        >
          Mahhin<span className="text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`font-headline font-semibold tracking-tight transition-all duration-300 ${
                isActive(link.path)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/pdf/Mahhin Resume .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-[0.75rem] font-headline font-semibold active:scale-95 transition-transform shadow-sm hover:shadow-md"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 glass-nav border-t border-outline-variant/10 animate-fade-in-up">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`font-headline font-semibold text-lg py-2 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/pdf/Mahhin Resume .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-3 rounded-[0.75rem] font-headline font-semibold text-center mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
