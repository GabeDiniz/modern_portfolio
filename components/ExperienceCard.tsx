import React from 'react'
import { motion } from 'framer-motion'

// type Props = {}

export default function ExperienceCard({}) {
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
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
            src='duplicated.jpg'
        />

        <div className='px-0 md:px-10 flex flex-col'>
            <h4 className='text-4xl font-light self-center'>Soft Dev.</h4>
            <p className='font-bold text-2xl mt-1 self-center'>OpenText</p>
            <div className='flex space-x-2 my-2 self-center'>
                {/* Tech Used */}
                <img
                    className='h-10 w-10 rounded-full'
                    src='favicon.ico' 
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Start Date ... End Date</p>
            <ul className='list-disc space-y-4 ml-5 text-md'>
                <li>FILLERFILLERFILLERFILLERFILLERFILLERFILLER FILLERFILLERFILLER FILLERFILLER FILLERFILLERFILLER FILLER</li>
                <li>FILLERFILLERFILLERFILLERFILLERFILLERFILLER FILLERFILLERFILLER FILLERFILLER FILLERFILLERFILLER FILLER</li>
                <li>FILLERFILLERFILLERFILLERFILLERFILLERFILLER FILLERFILLERFILLER FILLERFILLER FILLERFILLERFILLER FILLER</li>
                <li>FILLERFILLERFILLERFILLERFILLERFILLERFILLER FILLERFILLERFILLER FILLERFILLER FILLERFILLERFILLER FILLER</li>
            </ul>
        </div>
    </article>
  )
}