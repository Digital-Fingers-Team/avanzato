"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "@/components/effects/GlassCard";
import type { Project } from "@/lib/projects";

const fallbackProjects: Project[] = [
  {
    title: "Nebula AI",
    stack: ["Next.js", "OpenAI API", "Cloudflare"],
    description: "AI-powered analytics dashboard for enterprise decision-making.",
    order: 1,
  },
  {
    title: "Vantage Bank",
    stack: ["React", "Node.js", "PostgreSQL"],
    description: "Digital banking platform with real-time transactions.",
    order: 2,
  },
  {
    title: "Kinetix",
    stack: ["Framer Motion", "Tailwind", "Vercel"],
    description: "Portfolio for a motion-design studio with fluid page transitions.",
    order: 3,
  },
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.videoSrc) {
    return (
      <video
        className="h-full w-full object-cover"
        src={project.videoSrc}
        poster={project.imageSrc}
        controls
        preload="metadata"
      />
    );
  }

  if (project.imageSrc) {
    return (
      <Image
        src={project.imageSrc}
        alt={`${project.title} project preview`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    );
  }

  return <span className="text-sm text-muted">[Project Preview]</span>;
}

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  const visibleProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 text-center text-3xl font-bold md:text-5xl"
        >
          Selected <span className="text-accent-purple">work</span>
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group overflow-hidden rounded-3xl">
                <div className="relative h-56 w-full bg-bg-secondary flex items-center justify-center overflow-hidden">
                  <ProjectPreview project={project} />
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs font-mono uppercase tracking-widest text-accent-blue">
                    {project.stack.join(" - ")}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
