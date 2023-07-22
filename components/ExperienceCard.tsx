import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings';
import { urlFor } from '../lib/sanity';
import Image from 'next/image';
// import exp from 'constants';

type Props = {
    experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article 
        className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[600px] md:w-[710px] 
        xl:w-[1100px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer
        transition-opacity duration-200'
    >
        <motion.img
            initial={{
                y: -100, 
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=' w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' 
            src={urlFor(experience?.companyImage).url()}
        />

        <div className='px-0 md:px-10 flex flex-col'>
            <h4 className='text-4xl font-light self-center'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 self-center'>{experience.company}</p>
            <div className='flex space-x-2 my-2 self-center'>
                {/* Tech Used */}
                {experience.technologies.map((technology) => (
                    (
                        technology?.image &&
                        <img
                           key={technology._type}
                           className='h-10 w-10 rounded-full'
                           src={urlFor(technology?.image).url()} 
                           alt=''
                        />
                    )
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - 
                {experience.isCurrentlyWorkingHere 
                ? "Present" 
                : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}