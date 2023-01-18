import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Gabe Diniz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      {/* remove snap-center****************************************** */}
      <section id="hero" className='snap-center'> 
        <Hero />
      </section>
      
      {/* ABOUT */}
      <section id="about" className='snap-center'> 
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* SKILLS */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* CONTACT ME */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
