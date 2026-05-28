"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Code2, Clock } from "lucide-react";
import GlassCard from "@/components/effects/GlassCard";

const points = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized Core Web Vitals, sub-second load times." },
  { icon: Shield, title: "Enterprise Security", desc: "Audited code, secure data handling, and compliance." },
  { icon: Code2, title: "Clean Architecture", desc: "Scalable, maintainable codebases for long-term growth." },
  { icon: Clock, title: "On-time Delivery", desc: "Reliable milestones with transparent communication." },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-3xl font-bold md:text-5xl">
          Why <span className="text-accent-purple">Avanzato</span>
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <GlassCard className="p-8">
                <p.icon className="mx-auto mb-4 h-8 w-8 text-accent-purple" />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
