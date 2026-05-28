"use client";
import { motion } from "framer-motion";

const stack = ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Docker", "AWS", "Figma"];

export default function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-3xl font-bold md:text-5xl">
          Tech <span className="text-accent-purple">stack</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-muted backdrop-blur-sm hover:border-accent-purple/50 hover:text-soft"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
