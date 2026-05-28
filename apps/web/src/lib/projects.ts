import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  imageSrc?: string;
  videoSrc?: string;
  order: number;
};

type ProjectFile = {
  description?: unknown;
  stack?: unknown;
  imageSrc?: unknown;
  videoSrc?: unknown;
  order?: unknown;
};

const projectsDirectory = path.join(process.cwd(), "public", "projects");

const encodePath = (value: string) =>
  value
    .split("/")
    .filter(Boolean)
    .map((part) => encodeURIComponent(part))
    .join("/");

const toPublicProjectPath = (folderName: string, value: unknown) => {
  if (typeof value !== "string" || !value.trim()) {
    return undefined;
  }

  const mediaPath = value.trim();
  if (mediaPath.startsWith("http://") || mediaPath.startsWith("https://")) {
    return mediaPath;
  }

  if (mediaPath.startsWith("/")) {
    return mediaPath;
  }

  return `/projects/${encodeURIComponent(folderName)}/${encodePath(mediaPath)}`;
};

const toProject = (folderName: string, data: ProjectFile): Project => ({
  title: folderName,
  description:
    typeof data.description === "string" && data.description.trim()
      ? data.description.trim()
      : "Project details coming soon.",
  stack: Array.isArray(data.stack)
    ? data.stack.filter((item): item is string => typeof item === "string")
    : [],
  imageSrc: toPublicProjectPath(folderName, data.imageSrc),
  videoSrc: toPublicProjectPath(folderName, data.videoSrc),
  order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
});

export async function getProjects(): Promise<Project[]> {
  try {
    const folders = await readdir(projectsDirectory, { withFileTypes: true });
    const projects = await Promise.all(
      folders
        .filter((folder) => folder.isDirectory())
        .map(async (folder) => {
          const projectFile = path.join(
            projectsDirectory,
            folder.name,
            "project.json",
          );
          const file = await readFile(projectFile, "utf8");
          return toProject(folder.name, JSON.parse(file) as ProjectFile);
        }),
    );

    return projects.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  } catch (error) {
    console.warn("No project folders found or a project.json file is invalid.", error);
    return [];
  }
}
