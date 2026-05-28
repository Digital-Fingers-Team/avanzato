import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avanzato",
    short_name: "Avanzato",
    description:
      "Premium web design, development, and performance optimization for startups.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/mini-logo.png",
        sizes: "2000x2000",
        type: "image/png",
      },
      {
        src: "/logo+name.png",
        sizes: "2000x2000",
        type: "image/png",
      },
    ],
  };
}
