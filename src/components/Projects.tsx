import { ExternalLink, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import salesImg from "@/assets/project-sales.jpg";
import cloudImg from "@/assets/project-cloud.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sales Savvy",
      subtitle: "Full-Stack E-commerce Platform",
      description:
        "A comprehensive e-commerce platform featuring real-time order tracking, secure user authentication, and RESTful API integration for seamless data flow. Achieved 50% reduction in report preparation time.",
      image: salesImg,
      tech: ["React", "Java", "REST API", "Authentication", "Real-time Tracking"],
      links: {
        demo: "#",
        github: "#",
      },
      gradient: "from-primary to-secondary",
    },
    {
      title: "Cloud Secrets Management",
      subtitle: "AWS & Snowflake Integration",
      description:
        "Developed a robust cloud-based secrets management system integrating AWS services with Snowflake for secure data handling. Won KSCST competition for innovative approach to cloud security.",
      image: cloudImg,
      tech: ["AWS", "Snowflake", "Cloud Security", "Python", "Data Management"],
      links: {
        demo: "#",
        github: "#",
      },
      gradient: "from-secondary to-accent",
      award: "KSCST Competition Winner",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <div className="text-accent font-mono mb-2 glow-green">
            {'>'} featured_projects.show()
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-primary">Notable Work</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-fade-in ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 lg:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.award && (
                      <div className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 box-glow-green">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-semibold text-accent-foreground">
                          {project.award}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm text-accent font-mono mb-2 glow-green">
                      {'>'} project_{index + 1}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.subtitle}
                    </p>

                    <p className="text-foreground/90 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card/50 border border-primary/30 rounded-full text-sm text-primary shimmer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.links.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
