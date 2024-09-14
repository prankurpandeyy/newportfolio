import IconCloud from "./components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "python",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "mysql",
  "appwrite",
  "bash",
  "chrome",
  "selenium",
  "burpsuite",
  "numpy",
  "pandas",
  "matplotlib",
  "d3js",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-yellow-100   px-20 pb-20 pt-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
