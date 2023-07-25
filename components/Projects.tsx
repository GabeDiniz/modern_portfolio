import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../lib/sanity';

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className='h-screen flex relative flex-col text-left md:flex-row max-w-full justify-evenly 
            mx-auto items-center z-0'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Click on the icon to view the build
            </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-highlight/80 mb-2'>
            {projects?.map((project, i) => (
                <div
                    key={i}
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                    justify-center p-20 md:p-44 h-screen'>
                    
                    <motion.img
                        initial={{ 
                            opacity: 0,
                            y: -300 
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}  
                        viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                        className='w-[16rem] bg-cover'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=''>
                                Project {i + 1} of {projects.length}:
                            </span>{" "}
                            {project?.title}
                            <br />
                            <a className='text-lg underline decoration-highlight/50 decoration-2' href={project.linkToBuild} target="_blank" rel="noopener noreferrer">Link to Build</a>
                        </h4>
                        
                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((technology, i) => (
                                <img 
                                    className='h-8 w-8 rounded-full'
                                    key={i}
                                    src={urlFor(technology.image).url()}
                                />
                            ))}
                        </div>
                    
                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))};
        </div>
        <div className='w-full absolute top-[30%] bg-highlight/10 left-0 h-[400px] -skew-y-12'/>
    </motion.div>
  )
}