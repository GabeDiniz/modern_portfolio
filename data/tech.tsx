import { IconType } from "react-icons";
import {
  SiAngular,
  SiBun,
  SiCss,
  SiDiscord,
  SiDocker,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGnubash,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiLinux,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPosthog,
  SiPostman,
  SiPython,
  SiReact,
  SiSanity,
  SiShopify,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTeamcity,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { FaAws, FaDatabase, FaJava } from "react-icons/fa";

/*
  Tech icons live here instead of Sanity.

  1. Add a tech to the catalog once (icon from react-icons, brand color).
  2. Reference its slug in projectTech / experienceTech / marqueeTech.
  Slugs are type-checked, so a typo fails `tsc`.

  Anything without an entry here falls back to the technologies set in Sanity.
*/

export type Tech = { label: string; icon: IconType; color: string };

export const TECH = {
  // Languages
  typescript: { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  javascript: { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  python: { label: "Python", icon: SiPython, color: "#4B8BBE" },
  java: { label: "Java", icon: FaJava, color: "#E76F00" },
  html: { label: "HTML", icon: SiHtml5, color: "#E34F26" },
  css: { label: "CSS", icon: SiCss, color: "#663399" },
  sql: { label: "SQL", icon: FaDatabase, color: "#A1A1A6" },
  bash: { label: "Bash", icon: SiGnubash, color: "#4EAA25" },

  // Frameworks and runtimes
  react: { label: "React", icon: SiReact, color: "#61DAFB" },
  nextjs: { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  angular: { label: "Angular", icon: SiAngular, color: "#DD0031" },
  vite: { label: "Vite", icon: SiVite, color: "#646CFF" },
  tailwind: { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  nodejs: { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  bun: { label: "Bun", icon: SiBun, color: "#FBF0DF" },
  hono: { label: "Hono", icon: SiHono, color: "#E36002" },
  flask: { label: "Flask", icon: SiFlask, color: "#FFFFFF" },
  springboot: { label: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },

  // Data and infrastructure
  postgresql: { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  sqlite: { label: "SQLite", icon: SiSqlite, color: "#5FB0E6" },
  firebase: { label: "Firebase", icon: SiFirebase, color: "#DD2C00" },
  aws: { label: "AWS", icon: FaAws, color: "#FF9900" },
  docker: { label: "Docker", icon: SiDocker, color: "#2496ED" },
  linux: { label: "Linux", icon: SiLinux, color: "#FCC624" },
  netlify: { label: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  sanity: { label: "Sanity", icon: SiSanity, color: "#F03E2F" },

  // Tooling
  git: { label: "Git", icon: SiGit, color: "#F05032" },
  github: { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  gitlab: { label: "GitLab", icon: SiGitlab, color: "#FC6D26" },
  jira: { label: "Jira", icon: SiJira, color: "#2684FF" },
  jenkins: { label: "Jenkins", icon: SiJenkins, color: "#D24939" },
  teamcity: { label: "TeamCity", icon: SiTeamcity, color: "#FFFFFF" },
  postman: { label: "Postman", icon: SiPostman, color: "#FF6C37" },
  posthog: { label: "PostHog", icon: SiPosthog, color: "#F9BD2B" },
  wordpress: { label: "WordPress", icon: SiWordpress, color: "#21759B" },
  shopify: { label: "Shopify", icon: SiShopify, color: "#7AB55C" },
  discord: { label: "Discord", icon: SiDiscord, color: "#5865F2" },
} satisfies Record<string, Tech>;

export type TechSlug = keyof typeof TECH;

// Keyed by the project's Title in Sanity.
export const projectTech: Record<string, TechSlug[]> = {
  "Command Kit": ["python", "bash"],
  "Discord Bot.v2": ["python", "discord", "sqlite"],
  "SpurHacks Dashboard": ["react", "typescript", "firebase", "tailwind", "vite"],
  SpurHacks: ["vite", "typescript", "tailwind"],
  HawkHacks: ["vite", "typescript", "tailwind", "react"],
  "Candy Shopify Store": ["shopify", "javascript", "css"],
};

// Keyed by "Company / Job title" as they appear in Sanity.
export const experienceTech: Record<string, TechSlug[]> = {
  "Atrios / Software Engineer": ["typescript", "nextjs", "react", "bun", "hono", "postgresql", "aws"],
  "OpenText / Associate Software Build Engineer": ["python", "flask", "gitlab", "teamcity", "jira", "linux", "git"],
  "OpenText / Full Stack Software Developer": ["typescript", "nextjs", "react", "java", "springboot", "sql"],
  "U+ Education / Website Developer": ["react", "angular", "wordpress", "shopify", "javascript", "python"],
  "University of Waterloo / Computer Science JavaScript ISA": ["javascript", "html", "css"],
};

export const experienceKey = (company: string, jobTitle: string) => `${company} / ${jobTitle}`;

// The marquee under the hero, in display order.
export const marqueeTech: TechSlug[] = [
  "typescript",
  "javascript",
  "python",
  "java",
  "html",
  "css",
  "react",
  "nextjs",
  "nodejs",
  "bun",
  "hono",
  "vite",
  "tailwind",
  "postgresql",
  "firebase",
  "aws",
  "docker",
  "linux",
  "git",
  "gitlab",
  "github",
  "jira",
  "jenkins",
  "postman",
  "posthog",
  "springboot",
  "wordpress",
];
