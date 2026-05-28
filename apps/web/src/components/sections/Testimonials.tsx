"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/effects/GlassCard";

const testimonials = [
  { quote: "Avanzato redefined our online presence. The site is stunning and performs flawlessly.", author: "Elena R., CTO at Nebula" },
  { quote: "Their attention to detail is unmatched. True premium quality.", author: "Marcus T., Founder of Kinetix" },
  { quote: "A seamless process from design to launch. Highly recommended.", author: "Sarah L., Product Lead at Vantage" },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-3xl font-bold md:text-5xl">
          Trusted by <span className="text-accent-purple">founders</span>
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <GlassCard className="p-8 text-left">
                <p className="mb-4 text-muted italic">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-soft">{t.author}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
