"use client";
import React, { useCallback, useState } from "react";
// import { radialGradientStyles } from '../../styles/heroStyles'
import projectsData from "@/data/projects";
import Project from "./Project";
import useWindowSize from "@/lib/use-window-size";
// import useWindowSize from '../../lib/use-window-size'

const Projects = () => {
  const { width } = useWindowSize();
  // For small devices, always play the video
  const isSmallDevice = !!width && width < 768;

  const [playingVideoIndex, setPlayingVideoIndex] = useState(
    isSmallDevice ? -1 : 0 // On small devices all play, on large devices first video plays
  );

  // Function to start playing a specific video (and stop all others)
  const handleVideoPlay = useCallback(
    (index: number) => {
      if (!isSmallDevice) {
        setPlayingVideoIndex(index);
      }
    },
    [isSmallDevice]
  );

  const projectElements = projectsData.map((project, i) => (
    <Project
      {...project}
      key={i}
      isVideoPlaying={isSmallDevice || playingVideoIndex === i}
      onVideoPlay={() => handleVideoPlay(i)}
    />
  ));
  return (
    <section
      id="projects"
      className="bg-muted/50 text-foreground py-16 px-4 scroll-offset"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
          Projects
        </h2>
        <p className="text-center mb-12 text-muted-foreground hidden sm:block">
          Preview any project by hovering over it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectElements}
        </div>
      </div>
    </section>
  );
};

export default Projects;
