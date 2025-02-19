import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-800 pb-24 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center border-b border-slate-900 mx-2 lg:mx-10 p-4"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 w-[150px] h-[120px] rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
              <div className="my-4">
                {!project.demoLink ? (
                  ""
                ) : (
                  <>
                    <a
                      target="_blank"
                      className="my-2 text-cyan-500 underline hover:text-cyan-200 duration-200"
                      href={project.demoLink}
                    >
                      Live
                    </a>
                    <span> | </span>
                  </>
                )}
                {!project.githubLink ? (
                  ""
                ) : (
                  <a
                    target="_blank"
                    className="my-2 text-cyan-500 underline hover:text-cyan-200 duration-200"
                    href={project.githubLink}
                  >
                    Github
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
