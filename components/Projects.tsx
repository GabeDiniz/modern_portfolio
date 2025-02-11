import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [viewSummary, setViewSummary] = useState(true);

  function checkSize() {
    if (window.innerWidth < 990 || window.innerHeight < 850) {
      setViewSummary(true);
    } else {
      setViewSummary(false);
    }
  }
  useEffect(() => {
    checkSize();
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      checkSize(); // Call checkSize to update viewSummary when the window is resized
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-left max-w-full mx-auto items-center z-0"
    >
      <h3 className="uppercase mb-2 tracking-[10px] text-gray-500 text-2xl mt-28 md:mt-24">
        {"<"}Projects{"/>"}
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center px-10">
        Click on the card to view the build
      </h3>
      <a
        href="https://github.com/GabeDiniz"
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase underline hover:cursor-pointer mt-3 mb-6 2xl:mb-14 tracking-[3px] text-gray-400 text-sm z-20"
      >
        more projects
      </a>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl short:gap-4 sm:gap-8 z-20">
        {projects?.map((project, i) => (
          // Each Project
          <a
            key={i}
            href={project.linkToBuild}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={i}
              className="border border-transparent hover:glossyBG hover:text-highlight transition-all duration-300 hover:rounded-3xl flex items-start p-3 py-3 sm:py-5"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                // whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt="Project-Image"
                className="w-[5rem] h-auto bg-cover mr-4 rounded-lg"
              />
              <div className="max-w-6xl space-y-3">
                {/* Project Title */}
                <h4 className="short:text-xl text-2xl font-semibold">
                  {/* <span className=''>
                                        Project {i + 1} of {projects.length}:
                                    </span>{" "} */}
                  {project?.title}
                  <br />
                  {/* <a className='text-lg underline decoration-highlight/50 hover:decoration-highlight/90 decoration-2' href={project.linkToBuild} target="_blank" rel="noopener noreferrer">Link to Build</a> */}
                </h4>
                <div className="flex flex-wrap gap-y-1">
                  {project?.technologies.map((technology, i) =>
                    technology?.image ? ( // Ensure technology and technology.image are defined
                      <img
                        className="h-8 w-8 rounded-full mr-1 sm:mr-2"
                        key={i}
                        src={urlFor(technology.image)?.url() || ""} // Fallback to an empty string if urlFor fails
                        alt={`Technology ${i}`}
                      />
                    ) : null
                  )}
                </div>
                {viewSummary ? (
                  <></>
                ) : (
                  <p className="text-sm short:text-lg md:text-left text-center text-white">
                    {project?.summary}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-highlight/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
