// import useSWR from 'swr'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import Image from 'next/image'
import { VoidExpression } from 'typescript'



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}



const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Gabe Diniz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* HEADER */}
      <Header socials={ socials }/>

      {/* HERO */}
      {/* remove snap-center****************************************** */}
      <section id="hero" className='snap-center'> 
        <Hero pageInfo={pageInfo}/>
      </section>
      
      {/* ABOUT */}
      <section id="about" className='snap-center'> 
        <About pageInfo={pageInfo}/>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* SKILLS */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* PROJECTS */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* CONTACT ME */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src=''
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    fallback: false,
    revalidate: 10,
  };
};
