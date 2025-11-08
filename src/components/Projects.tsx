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
      gradient: "from-primary to-secondary",
    },
    {
      title: "Managing Secrets Using Cloud",
      subtitle: "AWS & Snowflake Integration",
      description:
        "Developed a robust cloud-based secrets management system integrating AWS services with Snowflake for secure data handling. Selected for 47th KSCST competition in 2024.",
      image: cloudImg,
      tech: ["AWS", "Snowflake", "Cloud Security", "Python", "Data Management"],
      gradient: "from-secondary to-accent",
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
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card/50 border border-primary/30 rounded-full text-sm text-primary shimmer"
                        >
                          {tech}
                        </span>
                      ))}
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
