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
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
