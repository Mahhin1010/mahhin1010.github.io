/**
 * VideoEmbed — Renders a Canva or YouTube video embed.
 */
export default function VideoEmbed({ video }) {
  return (
    <div className="tab-content-enter">
      <div className="bg-surface-container-low p-3 md:p-4 rounded-2xl shadow-xl">
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ paddingTop: "62.5%" }}
        >
          <iframe
            loading="lazy"
            src={video.src}
            title={video.title || "Project Video"}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
      </div>
      {video.title && (
        <p className="text-center text-on-surface-variant text-sm mt-4 font-medium">
          {video.title}
        </p>
      )}
    </div>
  );
}
