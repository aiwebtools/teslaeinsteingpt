
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "https://www.youtube.com/embed/DR_3MvP7Wws?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&hd=1";
    }
  }, []);

  return (
    <div className="w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <iframe
        ref={videoRef}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoSection;
