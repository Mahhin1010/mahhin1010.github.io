/**
 * NotebookEmbed — Renders a Jupyter notebook HTML file inside an iframe.
 */
export default function NotebookEmbed({ notebook }) {
  return (
    <div className="tab-content-enter">
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-xl overflow-hidden">
        <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              description
            </span>
            <span className="font-headline font-bold text-sm text-on-surface">
              {notebook.title || "Jupyter Notebook"}
            </span>
          </div>
          <a
            href={notebook.src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline"
          >
            Open in new tab
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </a>
        </div>
        <iframe
          src={notebook.src}
          title={notebook.title || "Jupyter Notebook"}
          className="w-full border-0"
          style={{ height: "75vh" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
