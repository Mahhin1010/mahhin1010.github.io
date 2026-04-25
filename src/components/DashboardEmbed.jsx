/**
 * DashboardEmbed — Renders a Power BI iframe with a GDPR disclaimer popup.
 */
import { useState } from "react";

export default function DashboardEmbed({ dashboard }) {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div className="tab-content-enter">
      {/* Dashboard iframe */}
      <div className="bg-surface-container-low p-3 md:p-4 rounded-2xl shadow-xl">
        <div className="relative w-full rounded-xl overflow-hidden border border-outline-variant/10" style={{ paddingTop: "60%" }}>
          <iframe
            title={dashboard.title}
            src={dashboard.src}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* GDPR Disclaimer */}
      {dashboard.disclaimer && showDisclaimer && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-inverse-surface text-inverse-on-surface rounded-xl px-6 py-4 shadow-2xl z-50 flex items-center gap-4 animate-fade-in-up">
          <span className="material-symbols-outlined text-xl opacity-60">
            info
          </span>
          <p className="text-sm flex-1 opacity-90">{dashboard.disclaimer}</p>
          <button
            onClick={() => setShowDisclaimer(false)}
            className="w-8 h-8 rounded-[0.75rem] border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors flex-shrink-0"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
