import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const skillsToShow = [
  SkillNames.C,
  SkillNames.JAVA,
  SkillNames.PYTHON,
  SkillNames.HTML,
  SkillNames.CSS,
  SkillNames.JS,
  SkillNames.BOOTSTRAP,
  SkillNames.PHP,
  SkillNames.FLASK,
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full min-h-screen py-20 bg-slate-900/50 backdrop-blur-sm">
      <SectionHeader id='skills' title="Technical Stack" desc="A collection of my technical expertise and tools I work with." />
      
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skillsToShow.map((skillName, index) => {
            const skill = SKILLS[skillName];
            if (!skill) return null;
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="group relative flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-primary/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={skill.icon} 
                    alt={skill.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.label}
                </h3>
                
                <div className="mt-2 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
