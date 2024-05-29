import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-800 pb-24 pt-4">
      <h2 className="my-20 text-4xl text-center">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => 
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                        {tech}
                    </span>
                ))}
                {!project.demoLink ? '' : <div className="mt-2">
                    <a target="_blank" className="my-2 text-blue-700" href="https://adityakkpk.github.io/AmazoneClone/amazon.html">Project Link</a>
                </div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
