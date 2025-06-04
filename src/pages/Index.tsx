import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

import { Typewriter } from "react-simple-typewriter";

import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";
import { SkillCard } from "@/components/skill-card";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ArrowDown, Code, Download, FileText, Mail, User } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Initialize animation observers
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add("is-visible");
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container text-center">
          <div className=" gap-8 items-center">
            <AnimateOnScroll>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="">Aniket Ahire</span>
                  <br />
                  <span className="text-primary">
                    <Typewriter
                      words={[
                        "Frontend Developer",
                        "Backend Developer",
                        "MERN Stack Developer",
                        "Full Stack Developer",
                      ]}
                      loop={0}
                      cursor={true}
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  I build modern, responsive web applications with a focus on
                  user experience and performance.
                </p>
                <div >
                  <Button className="mx-2" size="lg" asChild>
                    <a href="#projects">View My Work</a>
                  </Button>
                  <Button className="mx-2" size="lg" variant="outline" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" aria-label="Scroll down">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDown />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30">
        <div className="container">
          <SectionHeader
            title="About Me"
            subtitle="Get to know me and my background"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="About John Doe"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                  <User className="h-6 w-6" />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  Full Stack Developer based in Mumbai
                </h3>
                <p>
                  I'm a passionate Full Stack Developer with expertise in
                  building exceptional digital experiences. With 7+ months of
                  experience, I specialize in creating web applications that
                  meet both user needs and business goals.
                </p>
                <p>
                  My approach combines technical expertise with creative
                  problem-solving. I stay updated with the latest technologies
                  and best practices to deliver modern, scalable solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p className="text-muted-foreground">Aniket Ahire</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground">
                      aniketahire008@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                  <div>
                    <p className="font-medium">Availability:</p>
                    <p className="text-muted-foreground">
                      Open to opportunities
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <a href="#contact">Let's Talk</a>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <SectionHeader
            title="My Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll>
              <SkillCard
                title="Frontend Development"
                icon={<Code className="h-6 w-6" />}
                skills={[
                  "HTML/CSS",
                  "JavaScript",
                  "React.js",
                  "Responsive Design",
                  "Tailwind CSS",
                ]}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <SkillCard
                title="Backend Development"
                icon={<Code className="h-6 w-6" />}
                skills={[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Authentication",
                  "REST APIs",
                ]}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <SkillCard
                title="Tools & Others"
                icon={<Code className="h-6 w-6" />}
                skills={["Git", "Figma", "UI/UX Design"]}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30">
        <div className="container">
          <SectionHeader
            title="My Projects"
            subtitle="Check out some of my work"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={100}>
              <ProjectCard
                title="Digital Profile templete "
                description="A responsive and interactive profile templete for users, showcasing services, team members, and a gallery. Features include a contact form, appointment booking, and social media integration, all wrapped in a modern, user-friendly design."
                image="/img/pro.png"
                tags={["HTML", "CSS", "JavaScript", "Netlify"]}
                repoUrl="https://github.com/"
                liveUrl="https://profile-templete.netlify.app/"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <ProjectCard
                title="Fimly Fusion "
                description="WhatToWatch is a responsive React app that lets users explore trending, top-rated, and upcoming movies and TV shows using the TMDb API. It features clean UI, search functionality, detailed pages, and smooth navigation."
                image="/img/pro1.png"
                tags={[
                  "Reactjs",
                  "Tailwind CSS",
                  " React Router",
                  " TMDb API",
                  "Netlify",
                ]}
                repoUrl="https://github.com/"
                liveUrl="https://whattowatch01.netlify.app"
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <ProjectCard
                title="Progressive Weather Forecast App"
                description="WeatherApp is a responsive web app that displays real-time weather data and a 5-day forecast for any city using the OpenWeatherMap API. It features a sleek, glassmorphic UI with detailed temperature, conditions, and dynamic weather icons."
                image="/img/pro2.png"
                tags={[
                  "React",
                  "Tailwind CSS",
                  "OpenWeatherMap API",
                  "Netlify",
                ]}
                repoUrl="https://github.com/"
                liveUrl="https://weatherapp0409.netlify.app/"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30">
        <div className="container">
          <SectionHeader title="Contact Me" subtitle="Get in touch with me" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Let's Talk</h3>
                <p>
                  Have a project in mind or want to collaborate? Feel free to
                  reach out! I'm always open to discussing new opportunities and
                  ideas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        aniketahire008@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <div className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aniketahire008/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <div className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <div className="p-3 rounded-full bg-foreground text-background hover:bg-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-background rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Aniket Ahire. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#home"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
