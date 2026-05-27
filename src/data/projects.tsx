import React, { ReactNode } from "react";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Django</span>,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  aiml: {
    title: "AI/ML",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI/ML</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "library-automation",
    category: "Web Development",
    title: "Library Automation System",
    src: "/assets/projects-screenshots/library.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django, PROJECT_SKILLS.mysql],
    },
    live: "https://github.com/",
    get content(): ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Python Full stack Development by using Django
          </TypographyP>
          <TypographyP className="font-mono ">
            A comprehensive Library Automation System built using the Django framework. 
            It streamlines the process of managing books, memberships, and transactions, 
            providing an efficient digital solution for library management.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "malware-detection",
    category: "AI/ML",
    title: "Malware analysis and detection using AIML",
    src: "/assets/projects-screenshots/malware.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://dev77project.onrender.com/",
    get content(): ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            URL Malware Detection
          </TypographyP>
          <TypographyP className="font-mono ">
            This project utilizes Artificial Intelligence and Machine Learning to analyze 
            and detect malware in URLs. The goal is to determine whether a given URL is 
            safe or potentially harmful, providing a critical security tool for users.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "finance-tracker",
    category: "Web Development",
    title: "Finance Tracker",
    src: "/assets/projects-screenshots/finance.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mysql],
    },
    live: "https://github.com/devakadari277-rgb/Finance-Tracker",
    get content(): ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Personal Finance Management
          </TypographyP>
          <TypographyP className="font-mono ">
            A Python stack or Python-based application designed to help users track their 
            expenses, set budgets, and visualize their financial data through interactive 
            charts and summaries.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "ai-resume-builder",
    category: "AI/ML",
    title: "AI Resume Builder",
    src: "/assets/projects-screenshots/ai-resume.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.aiml],
    },
    live: "https://github.com/",
    get content(): ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Resume Generation
          </TypographyP>
          <TypographyP className="font-mono ">
            An AI-powered tool that assists users in creating professional resumes by 
            suggesting content, optimizing keywords for ATS, and providing various 
            templates tailored to specific industries.
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
