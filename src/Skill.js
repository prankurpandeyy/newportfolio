import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDocker, FaJenkins } from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import {
  FaUbuntu,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaChrome,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiWarp,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAppwrite,
  SiJest,
  SiSelenium,
  SiBurpsuite,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GiHistogram } from "react-icons/gi"; // Using GiHistogram for matplotlib

export default function Skill() {
  const techStack = [
    { name: "Linux (Ubuntu)", icon: <FaUbuntu className="w-8 h-8" /> },
    { name: "VSCode", icon: <SiVisualstudiocode className="w-8 h-8" /> },
    { name: "WARP", icon: <SiWarp className="w-8 h-8" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "React JS", icon: <FaReact className="w-8 h-8" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: "React Native", icon: <TbBrandReactNative className="w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8" /> },
    { name: "Python", icon: <FaPython className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "MySQL", icon: <SiMysql className="w-8 h-8" /> },
    { name: "Appwrite", icon: <SiAppwrite className="w-8 h-8" /> },
    { name: "GitHub", icon: <FaGithub className="w-8 h-8" /> },
    { name: "Chrome", icon: <FaChrome className="w-8 h-8" /> },
    { name: "Jest", icon: <SiJest className="w-8 h-8" /> },
    { name: "Selenium", icon: <SiSelenium className="w-8 h-8" /> },
    { name: "Burp Suite", icon: <SiBurpsuite className="w-8 h-8" /> },
    { name: "Numpy", icon: <SiNumpy className="w-8 h-8" /> },
    { name: "Pandas", icon: <SiPandas className="w-8 h-8" /> },
    { name: "Matplotlib", icon: <GiHistogram className="w-8 h-8" /> }, // Using histogram for matplotlib
    { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
    { name: "Docker", icon: <FaDocker className="w-8 h-8" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8" /> },
    { name: "Terraform", icon: <SiTerraform className="w-8 h-8" /> },
    { name: "Ansible", icon: <SiAnsible className="w-8 h-8" /> },
    { name: "GitLab", icon: <SiGitlab className="w-8 h-8" /> },
    { name: "Jenkins", icon: <FaJenkins className="w-8 h-8" /> },
    { name: "Prometheus", icon: <SiPrometheus className="w-8 h-8" /> },
    { name: "Grafana", icon: <SiGrafana className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-yellow-300 p-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 font-mono">My Tech Stack</h2>
            <div className="grid grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white p-2 rounded-full border-2 border-black mb-2">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 font-mono">About Me</h2>
            <p className="text-lg mb-4">
              I'm Prankur Pandey, a passionate developer specializing in
              full-stack web and mobile application development. With a strong
              command of the MERN stack (MongoDB, Express.js, React, Node.js)
              and React Native for mobile apps, I focus on building responsive
              and scalable solutions.
            </p>
            <p className="text-lg mb-4">
              I have extensive experience working with DevOps tools, cloud
              services like AWS, and CI/CD pipelines to ensure smooth deployment
              and efficient development processes. My projects often incorporate
              modern libraries and tools such as Chakra UI, Appwrite, and
              Three.js for 3D visualizations.
            </p>
            <p className="text-lg">
              I love sharing knowledge through technical writing, and you can
              find my articles on Dev.to, where I cover topics ranging from web
              development to DevOps best practices. When I'm not coding or
              writing, I explore new technologies, looking for innovative ways
              to create value through software.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <Button className="bg-black text-white hover:bg-white hover:text-black border-4 border-black transition-colors text-xl py-6 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <FaArrowAltCircleDown />
        </Button>
      </div>
    </div>
  );
}
