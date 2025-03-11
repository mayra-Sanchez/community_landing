import React from "react";
import "../styles/components/Galley.css"; 

const VideoGallery = () => {
  const videos = [
    { id: "f0nGd0SBK-4" },
    { id: "2s1QzmhijKE" },
    { id: "aLnSgboyO24" },
    { id: "9f7fkcSWr5Q" },
  ];

  return (
    <div className="video-gallery">
      <div className="video-container">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/shorts/${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-wrapper"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </a>
        ))}
      </div>

      <h2 className="video-title">
        MARKETING <span>MEDICO</span>
      </h2>

      <p className="video-description">
        Elevando la presencia digital de los profesionales de la salud.
      </p>
    </div>
  );
};

export default VideoGallery;
