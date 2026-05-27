import { config } from "@/data/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:text-primary gap-2">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Button>
        </Link>
        <div className="flex gap-4">
          <a href="/assets/projects-screenshots/resume.png" download="Kadari_Deva_Resume.png">
            <Button className="gap-2">
              <Download size={20} />
              Download
            </Button>
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden border-8 border-slate-700">
        {/* Mock PDF Header */}
        <div className="bg-slate-800 p-2 flex items-center justify-between border-b border-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-slate-400 font-mono">Resume_Draft.pdf</span>
          <div className="w-12" />
        </div>

        {/* Resume Image */}
        <div className="relative w-full bg-white flex justify-center p-4 min-h-[600px]">
          <img
            src="/assets/projects-screenshots/resume.png"
            alt="Kadari Deva Resume"
            className="w-full h-auto max-w-[800px] shadow-lg rounded-sm"
          />
        </div>

        {/* Footer with social icons and Hire Me as requested */}
        <div className="bg-slate-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-300">
          <div className="flex gap-8 items-center">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}`} 
              target="_blank"
              className="text-slate-600 hover:text-red-600 transition-colors"
              title="Gmail"
            >
              <SiGmail size={32} />
            </a>
            <a 
              href={config.social.linkedin} 
              target="_blank" 
              className="text-slate-600 hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <SiLinkedin size={32} />
            </a>
            <a 
              href={`https://github.com/${config.githubUsername}`} 
              target="_blank" 
              className="text-slate-600 hover:text-black transition-colors"
              title="GitHub"
            >
              <SiGithub size={32} />
            </a>
          </div>
          
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all">
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm">
        Displaying 1 of 1 pages
      </p>
    </div>
  );
}
