/**
 * TabBar — Dynamic tab navigation for project detail pages.
 * Only renders tabs for content that exists on the project.
 */
export default function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex border-b border-outline-variant/15 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            if (tab.external) {
              window.open(tab.external, "_blank");
            } else {
              onTabChange(tab.id);
            }
          }}
          className={`px-5 md:px-6 py-4 font-semibold text-sm whitespace-nowrap flex items-center gap-2 transition-all border-b-2 ${
            tab.external
              ? "text-[#0A66C2] border-transparent hover:bg-surface-container-low ml-auto"
              : activeTab === tab.id
              ? "text-primary border-primary"
              : "text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low/50"
          }`}
        >
          <span
            className="material-symbols-outlined text-lg"
            style={
              tab.iconFill
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {tab.icon}
          </span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
