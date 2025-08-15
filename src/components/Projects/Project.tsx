"use client";
import { IProject } from "@/data/projects";
import React, { Suspense, useRef } from "react";
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

const Project = ({
  title,
  video,
  labels,
  githubUrl,
  shortDescription,
  deployedUrl,
}: IProject) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const { width } = useWindowSize();
  const onlyShowOneColumn = !!width && width < 768;
  const handleMouseOver = () => {
    if (!onlyShowOneColumn) {
      videoElement?.current?.play();
    }
  };
  const handleMouseOut = () => {
    if (!onlyShowOneColumn) {
      videoElement?.current?.pause();
      if (videoElement?.current) {
        videoElement.current.currentTime = 0;
      }
    }
  };

  return (
    <div
      className="mb-0 col-span-12 md:col-span-6 xl:col-span-4"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="bg-stone-800 rounded text-white p-4">
        {/* autoplay is also an option, instead of mouseOver/mouseOut */}
        <div className="flex justify-center">
          <Suspense fallback={<CircularProgress />}>
            <video
              ref={videoElement}
              className={width && width > 1400 ? "small-video" : "w-full"}
              loop
              muted
              playsInline
              autoPlay={onlyShowOneColumn}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Suspense>
        </div>
        <div className="p-4">
          <h4 className="mb-2 text-white">{title}</h4>
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
          <p className="card-text mt-2 mb-4" style={{ minHeight: "48px" }}>
            {shortDescription}
          </p>
          {githubUrl && (
            <a
              href={githubUrl}
              className="bg-amber-700 hover:bg-transparent hover:border hover:border-amber-700 text-white hover:text-amber-700 font-bold py-2 px-4 rounded me-6"
              {...linkProps}
            >
              GitHub
            </a>
          )}
          {deployedUrl && (
            <a
              href={deployedUrl}
              className="bg-teal-700 hover:bg-transparent hover:border hover:border-teal-700 text-white hover:text-teal-700 font-bold py-2 px-4 border border-teal-700 hover:border-transparent rounded"
              {...linkProps}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
