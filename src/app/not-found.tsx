import React from "react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterDataPage = () => {
  const skills = [
    "Web Development",
    "CyberSecurity",
    "Artificial Intelligence",
    "Data Engineering",
    "Programming Concepts"
  ];

  const projects = ["Malware Analysis and Detection using AIML and Best Finance-Tracker Systems using HTML, CSS, JavaScript, PHP, Bootstrap, and Flask with database integration and validation features"];

  const certifications = [
    "AI and Data Engineering concepts through industry-oriented certification programs",
    "Ethical Hacking and Cybersecurity knowledge",
    "Web-Development Techniques like Angular, React, and Flask and Database Management with MySQL and MongoDB and Data Structures and Algorithms and Html, CSS, and JavaScript and Python and Java programming languages and javascript frameworks like React and Angular and Python libraries like Flask and Django and Spring Boot and Data Analytics and Visualization tools like Tableau and Power BI and Cloud Computing platforms."
  ];

  const languages = ["Java", "Python", "SQL", "Angular", "React", "Flask", "Django", "Spring Boot", "Excel", "Power BI","Power Point Presentation","Word","Html", "CSS", "JavaScript","Bootstrap","PHP","C","Data Base Management System"];

  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6">
            My Academic & Technical Journey
          </TypographyH2>
          <TypographyP className="text-lg text-slate-400">
            Worked on multiple academic and technical projects involving diverse domains
          </TypographyP>
        </div>

        <div className="space-y-8">
          {/* Skills */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Skills & Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Projects</h3>
              <ul className="space-y-3">
                {projects.map((project, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <TypographyP className="text-slate-300">{project}</TypographyP>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Certifications & Knowledge */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Certifications & Knowledge</h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <TypographyP className="text-slate-300">{cert}</TypographyP>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Programming Languages */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Programming Languages & Concepts</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-lg bg-primary/20 text-primary text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="bg-gradient-to-r from-primary/10 to-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Summary</h3>
              <TypographyP className="text-slate-300 leading-relaxed">
                Improved analytical, logical, and software development skills through practical implementations 
                and real-world applications. Continuously exploring new technologies and methodologies to stay 
                updated with industry standards and best practices in Web Development, CyberSecurity, and AI/ML domains.
              </TypographyP>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterDataPage;
