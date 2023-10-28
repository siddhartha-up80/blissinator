"use client";

import React, { useState, useEffect, useRef } from "react";

const videoSources: string[] = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

const HeroSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>(
    videoSources[Math.floor(Math.random() * 3)]
  );

  // Function to select a random video source
  // const selectRandomVideo = () => {
  //   const randomIndex = Math.floor(Math.random() * videoSources.length);
  //   setSelectedVideo(videoSources[randomIndex]);
  // };

  // useEffect(() => {
  //   // Initial random video selection when the component mounts
  //   selectRandomVideo();
  // }, []);

  return (
    <div className="hero-section relative md:-top-12 -top-5">
      <div className="video-container max-h-[80vh] overflow-hidden">
        <video loop autoPlay muted className="w-full h-auto">
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;





