import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../lib/sanity';

type Props = {
    skill: Skill;
    // directionLeft?: boolean;
}

function Skill({ skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-20 h-20 short:w-20 short:h-20 md:w-20 md:h-20 xl:w-24 xl:h-24 p-1 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        {/* Media Queries: md:w-28 md:h-28 xl:w-28 xl:h-28 */}
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out
        group-hover:bg-highlight/60 h-24 w-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full' title={skill.title} >
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  );
}

export default Skill;