import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    // Background (default gray [rgb(36,36,36)])
    <div
      className="bg-bgmain_blue text-white h-screen snap-y snap-mandatory overflow-scroll z-0
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-highlight/80 scroll-smooth transition duration-150 ease-in-out0"
    >
      <Head>
        <title>Gabe Diniz</title>
        <link className="rounded-full" rel="icon" href="/GD-bg-removed.png" />
      </Head>

      {/* HEADER */}
      <Header socials={socials} />

      {/* HERO */}
      {/* Potentially remove  */}
      <section id="hero" className="">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* ABOUT */}
      <section id="about" className="">
        <About pageInfo={pageInfo} />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="">
        <WorkExperience experiences={experiences} />
      </section>

      {/* SKILLS */}
      {/* <section id="skills" className="">
        <Skills skills={skills} />
      </section> */}

      {/* PROJECTS */}
      <section id="projects" className="">
        <Projects projects={projects} />
      </section>

      {/* CONTACT ME */}
      <section id="contact" className="">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition ease-in-out hover:scale-110 duration-600"
              src="BTT.png"
              alt="back-to-the-top"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// Client-Side rendering
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  // In the case that API is not functioning properly, return null as to not create Build errors
  return {
    props: {
      pageInfo: pageInfo || null,
      experiences: experiences || null,
      skills: skills || null,
      projects: projects || null,
      socials: socials || null,
    },
    // fallback: false,
    revalidate: 10,
  };
};
