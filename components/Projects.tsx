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
    if (window.innerWidth < 990) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-left max-w-full
                mx-auto items-center z-0"
    >
      <h3 className="uppercase mb-2 tracking-[20px] text-gray-500 text-2xl mt-24">
        Projects
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Click on the card to view the build
      </h3>
      <a
        href="https://github.com/GabeDiniz?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase underline cursor-pointer mt-3 mb-6 2xl:mb-14 tracking-[3px] text-gray-400 text-sm"
      >
        more projects
      </a>
      <div
        className="relative grid grid-cols-2 short:gap-4 gap-8 px-10 overflow-x-scroll overflow-y-hidden
          z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-highlight/80"
      >
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
              className="border border-transparent hover:glossyBG hover:text-highlight transition-all duration-200 rounded flex items-start p-3 py-5"
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
                className="w-[5rem] h-auto bg-cover mr-4"
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
                <div className="flex = space-x-2">
                  {project?.technologies.map((technology, i) => (
                    <img
                      className="h-8 w-8 rounded-full"
                      key={i}
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </div>
                {viewSummary ? (
                  <></>
                ) : (
                  <p className="short:text-sm text-md text-center md:text-left text-white">
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
