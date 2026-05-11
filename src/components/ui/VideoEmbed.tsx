interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({ url, title = "Video", className = "" }: VideoEmbedProps) {
  const getEmbedUrl = (rawUrl: string): string => {
    // YouTube
    const ytMatch = rawUrl.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
    );
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;
    }

    // Vimeo
    const vimeoMatch = rawUrl.match(
      /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/
    );
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?badge=0&autopause=0`;
    }

    return rawUrl;
  };

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${className}`}>
      <iframe
        src={getEmbedUrl(url)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
