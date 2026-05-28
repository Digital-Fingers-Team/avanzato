"use client";
import { motion } from "framer-motion";

const steps = ["Discovery", "Design", "Development", "Launch"];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-3xl font-bold md:text-5xl">
          Our <span className="text-accent-purple">process</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-purple to-accent-blue text-lg font-bold">
                {i + 1}
              </div>
              <span className="text-xl font-semibold">{step}</span>
              {i < steps.length - 1 && <span className="hidden md:block text-muted">-&gt;</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
