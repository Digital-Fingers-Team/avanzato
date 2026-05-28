"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/effects/GlassCard";
import { Globe, Layout, Code, Palette, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Modern Websites", desc: "Blazing-fast, responsive sites with Next.js & headless CMS." },
  { icon: Layout, title: "Landing Pages", desc: "High-conversion pages crafted with motion & storytelling." },
  { icon: Code, title: "Full-Stack Apps", desc: "Complex SaaS and dashboards with Node.js & serverless." },
  { icon: Palette, title: "UI/UX Design", desc: "Research-driven interfaces that feel intuitive & elegant." },
  { icon: Zap, title: "Performance Optimization", desc: "Core Web Vitals tuning, edge caching, and lazy hydration." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            What we <span className="text-accent-purple">do</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <GlassCard className="h-full p-8">
                <service.icon className="mb-5 h-8 w-8 text-accent-purple" />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
