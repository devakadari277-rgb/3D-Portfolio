import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/ace-input";
import { Calendar, ChevronRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Successfully Completed NPTEL Course.",
    date: "March-April 2025",
    description: "Successfully completed an online certification course from NPTEL, gaining valuable technical knowledge, practical skills, and industry-oriented learning experience through structured training and assessments.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Mastering Ethical Hacking.",
    date: "July-October 2025",
    description: "Successfully completed an Ethical Hacking certification course through NPTEL, gaining knowledge in cybersecurity concepts, network security, vulnerability assessment, penetration testing, and ethical hacking techniques for protecting digital systems and data.",
    category: "Technology",
  },
  {
    id: 3,
    title: "AI-Powered Data Engineering.",
    date: "December-February 2025",
    description: "Successfully completed an AI-Powered Data Engineering certification from L&T, gaining practical knowledge in artificial intelligence, data engineering, machine learning, data analytics, and modern technologies used for real-world business solutions.",
    category: "Technology",
  },
];

const BlogSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="blog"
          title="Blog & Insights"
          desc="Sharing my thoughts and discoveries in the tech world."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-primary mb-2 font-mono uppercase tracking-wider">
                    <span className="bg-primary/10 px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 text-primary hover:bg-transparent flex items-center gap-1 group">
                    Read More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 text-center"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
            <Mail size={120} className="text-primary" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Stay in the Loop
            </h3>
            <p className="text-slate-400 text-lg">
              Subscribe to my newsletter for the latest updates on my projects, blog posts, and tech insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Input 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-700 text-white h-12 h-fit"
              />
              <Button 
                className="h-12 px-8 font-bold"
                onClick={() => window.location.href = "mailto:devakadari277@gmail.com?subject=Newsletter%20Subscription&body=I%20would%20like%20to%20subscribe%20to%20your%20newsletter."}
              >
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-xs text-slate-500">
              No spam, just quality content. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
