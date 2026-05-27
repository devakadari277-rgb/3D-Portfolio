// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  C = "C",
  MYSQL = "mysql",
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  BOOTSTRAP = "bootstrap",
  PHP = "php",
  FLASK = "flask",
  DJANGO = "django",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The versatile language for everything from web to AI! 🐍✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Write once, run anywhere, deadass! ☕🔥",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.C]: {
    id: 3,
    name: "C",
    label: "C",
    shortDescription: "The OG language where it all started! 💻📜",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 4,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Reliable relational database management! 🐬🗄️",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.HTML]: {
    id: 5,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 6,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.JS]: {
    id: 7,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 9,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers! 🦸‍♂️💪",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 10,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "The world's most popular front-end open source toolkit! 🎨⚡",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.PHP]: {
    id: 11,
    name: "php",
    label: "PHP",
    shortDescription: "The backbone of the web! 🐘🌐",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 12,
    name: "flask",
    label: "Flask",
    shortDescription: "A lightweight WSGI web application framework! 🧪🔥",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 8,
    name: "django",
    label: "Django",
    shortDescription: "The web framework for perfectionists with deadlines! 🎸🛡️",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const INTERNSHIPS: Experience[] = [
  {
    id: 1,
    startDate: "2025 June",
    endDate: "2025 July",
    title: "Python Django Development Intern",
    company: "Top-notch Softwares, Visakhapatnam",
    description: ["Completed internship focused on Python Django development."],
    skills: [SkillNames.PYTHON, SkillNames.DJANGO],
  },
];

export const QUALIFICATIONS: Experience[] = [
  {
    id: 1,
    startDate: "2023",
    endDate: "2027",
    title: "B.Tech (Computer Science and Engineering)",
    company: "GMR Institute of Technology, Rajam",
    description: ["Currently pursuing Bachelor of Technology.", "Current CGPA: 8.78"],
    skills: [SkillNames.PYTHON, SkillNames.JAVA, SkillNames.C, SkillNames.MYSQL, SkillNames.JS, SkillNames.HTML, SkillNames.CSS],
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2023",
    title: "Intermediate (M.P.C)",
    company: "Karunya Jr College, Narsipatnam",
    description: ["Percentage: 80%"],
    skills: [],
  },
  {
    id: 3,
    startDate: "2020",
    endDate: "2021",
    title: "SSC",
    company: "Karunya School, Narsipatnam",
    description: ["Percentage: 92%"],
    skills: [],
  },
];

// Keep EXPERIENCE for backward compatibility and redirect to INTERNSHIPS
export const EXPERIENCE = INTERNSHIPS;

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

