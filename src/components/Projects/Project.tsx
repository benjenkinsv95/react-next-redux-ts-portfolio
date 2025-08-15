"use client";
import { IProject } from "@/data/projects";
import React, { Suspense, useEffect, useRef } from "react";
import useWindowSize from "@/lib/use-window-size";
import { linkProps } from "../IconLinks/IconLinks";
import { CircularProgress } from "@mui/material";
// import styled from 'styled-components'

// const Label = styled.span`
//     background: ${({ background }) => background};
//     color: ${({ color }) => color};
//     padding: 0.15rem 0.5rem;
//     font-weight: 600;
//     border-radius: 0.6rem;
//     margin-right: 0.4rem;
//     overflow-wrap: normal;
// `

type ProjectProps = IProject & {
  onVideoPlay: (isPlaying: boolean) => void;
  isVideoPlaying?: boolean;
};

const Project = ({
  title,
  video,
  labels,
  githubUrl,
  shortDescription,
  deployedUrl,
  isVideoPlaying,
  onVideoPlay,
}: ProjectProps) => {
  const { width } = useWindowSize();
  const videoElement = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    onVideoPlay(true);
  };

  useEffect(() => {
    if (isVideoPlaying) {
      videoElement?.current?.play();
    } else {
      videoElement?.current?.pause();
      if (videoElement?.current) {
        videoElement.current.currentTime = 0;
      }
    }
  }, [isVideoPlaying]);

  return (
    <div className="w-full" onMouseOver={handleMouseOver}>
      <div className="bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full">
        {/* autoplay is also an option, instead of mouseOver/mouseOut */}
        <div className="flex justify-center">
          <Suspense fallback={<CircularProgress />}>
            <video
              ref={videoElement}
              className={width && width > 1400 ? "small-video" : "w-full"}
              loop
              muted
              playsInline
              autoPlay={isVideoPlaying}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Suspense>
        </div>
        <div className="mt-4">
          <h3 className="mb-3 text-xl font-semibold text-card-foreground">
            {title}
          </h3>
          {labels.map((label, i) => (
            <span
              key={i}
              className="px-2 py-1 font-semibold rounded-lg mr-2 break-keep"
              style={{
                background: label.background,
                color: label.color,
              }}
            >
              {label.name}
            </span>
          ))}
          <p
            className="text-muted-foreground mt-3 mb-6 text-sm leading-relaxed"
            style={{ minHeight: "48px" }}
          >
            {shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                {...linkProps}
              >
                GitHub
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                className="bg-card hover:bg-muted text-card-foreground font-semibold py-2 px-4 border border-border hover:border-primary rounded-lg transition-all duration-200 text-sm"
                {...linkProps}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
