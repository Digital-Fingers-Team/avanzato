Each project lives in its own folder:

projects/
  Project Name/
    project.json
    cover.webp
    demo.mp4

The folder name is used as the project title.

project.json fields:

{
  "order": 1,
  "description": "Short project description.",
  "stack": ["Next.js", "Node.js"],
  "imageSrc": "cover.webp",
  "videoSrc": "demo.mp4"
}

Use file names relative to the same project folder for imageSrc and videoSrc.
Leave videoSrc empty if you only want an image.
