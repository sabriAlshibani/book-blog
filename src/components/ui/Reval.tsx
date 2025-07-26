'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  once?:boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 50,
  scale,
  once = false
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(scale ? { scale } : { y }),
      }}
      whileInView={{
        opacity: 1,
        ...(scale ? { scale: 1 } : { y: 0 }),
      }}
      transition={{ duration, delay }}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  );
}
