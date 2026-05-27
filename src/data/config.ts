const config = {
  title: "Portfolio - Kadari Deva |",
  description: {
    long: "Kadari Deva, from Narsipatnam, currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at GMR Institute of Technology. I am a passionate Web Developer and Software Architect specializing in building interactive web experiences and robust architectures. My curiosity drives me to stay at the forefront of technology, exploring advanced algorithms, system design, and immersive digital solutions.",
    short:
      "Kadari Deva, a passionate Web Developer, Software Architect, and B.Tech CSE student from Narsipatnam, specializing in interactive web experiences and robust software solutions.",
  },
  keywords: [
    "Kadari Deva",
    "portfolio",
    "web developer",
    "B.Tech CSE",
    "GMR Institute of Technology",
    "Python",
    "Java",
    "Django",
    "web development",
    "interactive websites",
    "editing skills",
    "software architect",
    "system design",
    "software engineering",
    "MySQL",
    "React",
    "Next.js",
  ],
  author: "Kadari Deva",
  email: "devakadari277@gmail.com",
  phone: "9398496327",
  site: "https://kadari-deva.site",
  social: {
    linkedin: "https://www.linkedin.com/in/deva-kadari-2399781a",
    github: "https://github.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  githubUsername: "kadari-deva",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
};
export { config };
