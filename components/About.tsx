import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../lib/sanity';

type Props = {
    pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About Me</h3>
        
        <motion.img 
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:text-sm md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]"
            initial={{
                opacity: 0,
                x: -200,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1.2
            }}
            src={urlFor(pageInfo?.profilePic).url()}
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Oh, hello there..</h4>
            <p className='lg:text-lg md:text-sm xs:text-sm'>{pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}
