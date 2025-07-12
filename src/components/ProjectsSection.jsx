import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OS Project",
    description: 
    `Played a pivotal role in preparing 750 laptops for Daraz’s largest annual campaign, 11.11, in 2 weeks.
    Installed operating systems and configured essential software to ensure campaign preparation.`,
    image: "/os.png",
    tags: ["IT Support", "Windows"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 2,
    title: "Mail Migration",
    description:
      `Contributed to Daraz's successful migration from Google’s mail server to Alibaba’s domain.
      Manually migrated group email accounts, preserving communication history and settings.`,
    image: "/alimail.jpg",
    tags: ["IT Operations Management"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "PDF AI Extractor",
    description:
      `A tool to extract form data and embedded files from PDF documents using PyMuPDF and EasyOCR.
      Integrated Google Gemini AI via LangChain to generate intelligent summaries of the extracted content.
`,
    image: "/pdf.png",
    tags: ["Python", "LangChain", "Google Gemini"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahmud-ashiq/pdf_ai_extractor",
  },
  {
    id: 4,
    title: "Online Healthcare",
    description:
      `Developed a web-based healthcare portal for appointments, payments, and a doctor-patient chat system.`,
    image: "/portal.png",
    tags: ["PHP", "MongoDB", "JavaScript" ],
    demoUrl: "#",
    githubUrl: "https://github.com/mahmud-ashiq/online_healthcare",
  },
  {
    id: 5,
    title: "Portable Air Pollution Analyzer",
    description:
      `Developed a portable air quality monitoring device using Arduino.
      Integrated PM10/PM2.5 sensors to measure particulate matter and assess AQI.
      Designed a user-friendly interface for displaying air quality metrics.`,
    image: "/Arduino.jpg",
    tags: ["Arduino", "Embedded Systems" ],
    demoUrl: "#",
    githubUrl: "",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mahmud-ashiq"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
