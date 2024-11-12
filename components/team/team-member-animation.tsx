'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TeamMemberAnimationProps {
  children: ReactNode;
}

export function TeamMemberAnimation({ children }: TeamMemberAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}