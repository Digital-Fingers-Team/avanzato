"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/effects/GlassCard";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold md:text-5xl mb-6">
              We are <span className="text-accent-purple">Avanzato</span>
            </h2>
            <p className="text-muted leading-relaxed">
              A team of designers and engineers obsessed with crafting
              future-proof digital products. From pixel-perfect interfaces to
              robust backend architectures, we deliver experiences that feel
              alive.
            </p>
          </div>
          <GlassCard className="p-8 text-center">
            <div className="text-4xl font-bold text-accent-purple">4+</div>
            <div className="text-sm text-muted">Years of innovation</div>
            <div className="mt-4 text-4xl font-bold text-accent-blue">50+</div>
            <div className="text-sm text-muted">Projects shipped</div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
