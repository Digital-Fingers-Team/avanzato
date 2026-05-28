"use client";
import { motion } from "framer-motion";
import MagneticButton from "@/components/effects/MagneticButton";
import GradientText from "@/components/effects/GradientText";
import GridBackground from "@/components/effects/GridBackground";
import FloatingElement from "@/components/effects/FloatingElement";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <GridBackground />
      <FloatingElement
        className="left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent-purple/20 blur-3xl"
        delay={0}
      />
      <FloatingElement
        className="right-1/4 top-1/3 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl"
        delay={2}
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent-purple">
            Digital Excellence
          </p>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] md:text-7xl">
            We build{" "}
            <GradientText>futuristic</GradientText>
            <br />
            digital experiences
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-muted">
            Avanzato is a premium web agency merging bold design with
            engineering precision. We craft websites and apps that define
            modern startups.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton>Start a Project</MagneticButton>
          <button className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-soft backdrop-blur-sm transition hover:bg-white/5">
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
