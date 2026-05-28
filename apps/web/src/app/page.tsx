import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { getProjects } from "@/lib/projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avanzato.agency/#organization",
      name: "Avanzato",
      url: "https://avanzato.agency",
      email: "baraasaad007@gmail.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+201036016057",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["en", "ar"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://avanzato.agency/#website",
      name: "Avanzato",
      url: "https://avanzato.agency",
      publisher: {
        "@id": "https://avanzato.agency/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://avanzato.agency/#service",
      name: "Avanzato Web Design and Development",
      url: "https://avanzato.agency",
      provider: {
        "@id": "https://avanzato.agency/#organization",
      },
      serviceType: [
        "Website design",
        "Next.js development",
        "Landing page design",
        "Full-stack application development",
        "Performance optimization",
      ],
      areaServed: "Worldwide",
    },
  ],
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects projects={projects} />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
}
