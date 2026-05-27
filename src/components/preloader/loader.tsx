"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";


export default function Index() {
  const { isLoading, loadingPercent } = usePreloader();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8">
            {/* Background 'D' Outline */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10">
              <path
                d="M30 20 H55 C75 20 85 35 85 50 C85 65 75 80 55 80 H30 V20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Animated 'D' Fill/Stroke */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white">
              <motion.path
                d="M30 20 H55 C75 20 85 35 85 50 C85 65 75 80 55 80 H30 V20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: loadingPercent / 100 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </svg>
            
            {/* Centered Percentage or just the Letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                className="text-7xl sm:text-9xl font-bold font-display text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                D
              </motion.span>
            </div>
          </div>

          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-4xl sm:text-5xl font-bold font-display text-white">
              {loadingPercent.toFixed(0)}%
            </p>
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Loading Portfolio
            </p>
          </motion.div>

          <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none z-[-1]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-slate-900"
            ></motion.path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}