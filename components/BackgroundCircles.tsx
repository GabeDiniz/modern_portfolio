import React from 'react'
import { motion } from "framer-motion" 

// type Props = {}

export default function BackgroundCircles({}) {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1],
        }}
        transition={{
            duration: 2.5,
        }}
        className='flex justify-center items-center'
    >
        <div className='absolute border mt-[20rem] border-neutral rounded-full h-[200px] w-[200px] animate-ping'/>
        <div className='absolute border mt-[20rem] border-neutral rounded-full h-[200px] w-[200px]'/>
        <div className='absolute border mt-[20rem] border-neutral rounded-full h-[400px] w-[400px]'/>
        <div className='absolute border mt-[20rem] border-highlight rounded-full opacity-20 h-[550px] w-[550px] animate-ping animate-pulse'/>
        <div className='absolute border mt-[20rem] border-neutral rounded-full h-[750px] w-[750px]'/>
    </motion.div>
  )
}