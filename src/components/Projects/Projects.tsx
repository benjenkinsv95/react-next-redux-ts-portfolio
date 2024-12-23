import React from 'react'
// import { radialGradientStyles } from '../../styles/heroStyles'
import projects from '@/data/projects'
import Project from './Project'
// import useWindowSize from '../../lib/use-window-size'

const Projects = () => {
//   const { width } = useWindowSize()
//   const onlyShowOneColumn = width < 768
  const projectElements = projects.map((project, i) => (
    <Project
      {...project}
      key={i}
    />
  ))
  return (
    <div id="projects" className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container py-4 mx-auto">
        <h2 className='text-4xl font-bold py-2  text-white text-center'>Projects</h2>
        <h4 className='text-center mb-3 hidden sm:block'>You can preview a project by hovering over it</h4>
        <div className="grid grid-cols-12 gap-5">
          {projectElements}
        </div>
      </div>
    </div>
  )
}

export default Projects