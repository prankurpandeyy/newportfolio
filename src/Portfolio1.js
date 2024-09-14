import { TypeAnimation } from "react-type-animation";
import { Button } from "./components/ui/button";

import { IconCloudDemo } from "./IconCloudDemo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import {
  Briefcase,
  Code,
  FileText,
  Home,
  Mail,
  User,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import Skill from "./Skill";

const Portfolio1 = () => {
  const [posts, setPosts] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchDevToPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=prankurpandeyy"
        );
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching Dev.to posts:", error);
      }
    };
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/atdsoftwares/repos"
        );
        const repos = await response.json();
        setRepos(repos);
        console.log(repos);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchGithubRepos();

    fetchDevToPosts();
  }, []);

  return (
    <div className="min-h-screen bg-yellow-100 font-mono">
      {/* Header */}
      <header className="bg-black text-white p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Prankur Pandey
          </a>
          <ul className="flex space-x-4">
            {[
              {
                href: "#home",
                icon: <Home className="w-4 h-4" />,
                label: "Home",
              },
              {
                href: "#about",
                icon: <User className="w-4 h-4" />,
                label: "About",
              },
              {
                href: "#skills",
                icon: <User className="w-4 h-4" />,
                label: "Skill",
              },
              {
                href: "#services",
                icon: <Code className="w-4 h-4" />,
                label: "Services",
              },
              {
                href: "#work",
                icon: <Briefcase className="w-4 h-4" />,
                label: "Work",
              },
              {
                href: "#blog",
                icon: <FileText className="w-4 h-4" />,
                label: "Blog",
              },
            ].map(({ href, icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center space-x-1 hover:underline"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 space-y-12">
        {/* Hero Section */}

        <section id="home" className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4">Prankur Pandey</h1>
          <section id="skills" className="bg-yellow-100 p-8">
            <div className="flex justify-center items-center space-x-4 bg-yellow-100">
              <IconCloudDemo />
            </div>
          </section>

          <p className="text-2xl mb-8">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "Technical Writer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <Button className="bg-black text-white text-xl py-6 px-8 rounded-none hover:bg-white hover:text-black border-4 border-black transition-colors">
            <a
              href="https://drive.google.com/file/d/1qimMeJ8tqNOZ3rBPsRTdWGz0eWw373jk/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="bg-pink-300 p-8 border-8 border-black">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl">
            <Skill />
          </p>
        </section>
        {/* SKILLS */}
        {/* <section
          id="skills"
          className="bg-yellow-300 p-8 border-8 border-black"
        >
          <h2 className="text-4xl font-bold mb-4">Skills </h2>
          <div className="flex justify-center items-center space-x-4 bg-yellow-300">
            <IconCloudDemo />
          </div>
        </section> */}

        {/* Services Section */}
        <section id="services" className="space-y-8">
          <h2 className="text-4xl font-bold">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web App Development",
                description: "Modern & Custom Web Application Development",
              },
              {
                title: "Technical Writing and Documentation",
                description:
                  "Effective Technical Documentation for Your Projects",
              },
              {
                title: "Mobile Apps",
                description: "Cross-Platform Mobile Applications Development",
              },
            ].map((service, index) => (
              <Card key={index} className="border-4 border-black">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="space-y-8">
          <h2 className="text-4xl font-bold">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((project, index) => (
              <Card key={index} className="border-4 border-black bg-blue-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <div className="flex ">
                  <CardFooter>
                    <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                  <CardFooter>
                    <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Demo{" "}
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-8">
          <h2 className="text-4xl font-bold">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-4 border-black bg-green-300">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.published_at}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                    <a
                      href={post.canonical_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact"
          className="bg-yellow-300 p-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="text-4xl font-bold mb-8 font-mono">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8" />
              <a
                href="https://wa.me/+917580909961"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold underline hover:text-purple-600 transition-colors"
              >
                +91-7580909961
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8" />
              <a
                href="mailto:your.email@example.com"
                className="text-2xl font-bold underline hover:text-purple-600 transition-colors"
              >
                pprankur@gmail.com
              </a>
            </div>
            <Button className="bg-black text-white hover:bg-white hover:text-black border-4 border-black transition-colors text-xl py-6 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Say Hello!
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white p-4 mt-12">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Prankur Pandey</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <a
              className="mr-5 hover:text-gray-900"
              href="https://facebook.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296499_fb_facebook_facebook%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://linkedin.com/in/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296501_linkedin_network_linkedin%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a
              className="mr-5 hover:text-gray-900"
              href="https://twitter.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296516_tweet_twitter_twitter%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a
              className="mr-5 hover:text-gray-900"
              href="https://wa.me/7580909961"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296520_bubble_chat_mobile_whatsapp_whatsapp%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://youtube.com/@prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296521_play_video_vlog_youtube_youtube%20logo_icon.svg"
                alt="facebook"
                classNameName="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://instagram.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296765_camera_instagram_instagram%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://www.upwork.com/freelancers/~014495ec1bab529596"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/6092b7514135708162a4be92_Favicon%20256.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://github.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/211904_social_github_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio1;
