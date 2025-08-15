import React from "react";
// import { radialGradientStyles } from '../../styles/heroStyles'
import projects from "@/data/projects";
import Project from "./Project";
// import useWindowSize from '../../lib/use-window-size'

const Projects = () => {
  //   const { width } = useWindowSize()
  //   const onlyShowOneColumn = width < 768
  const projectElements = projects.map((project, i) => (
    <Project {...project} key={i} />
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
          You can preview a project by hovering over it
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectElements}
        </div>
      </div>
    </section>
  );
};

export default Projects;
