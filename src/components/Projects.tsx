import salesImg from "@/assets/project-sales.jpg";
import cloudImg from "@/assets/project-cloud.jpg";
import { ExternalLink } from "lucide-react";

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

  const analyticsProjects = [
    {
      name: "E-commerce Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_powerbi-dataanalytics-ecommerce-activity-7402670979950247936-i8L9",
    },
    {
      name: "Social Media Marketing Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_powerbi-marketinganalytics-dataanalytics-activity-7402671237434466304-6j-B",
    },
    {
      name: "College Event Feedback Analysis Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_dataanalytics-python-nlp-activity-7402671561171820544-4gQJ",
    },
    {
      name: "Netflix Content Analysis Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_netflixanalysis-powerbi-dataanalytics-activity-7402677347604488192---Th",
    },
    {
      name: "Heart Disease Prediction Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_healthcareanalytics-powerbi-clinicalanalytics-activity-7402677619026006016-mdsk",
    },
    {
      name: "Social Media Mental Health Sentiment Correlation Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_datascience-mentalhealth-socialmedia-activity-7415024873258889216--mjj",
    },
    {
      name: "Sustainable Shopping Behaviour Analysis Dashboard",
      link: "https://www.linkedin.com/posts/basava-prasad-9b1739382_sustainability-dataanalysis-greenconsumer-activity-7415025474936090624-Vdhf",
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

          {/* Data Analytics Projects Card */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 group">
              <div className="p-8">
                <div className="text-sm text-accent font-mono mb-2 glow-green">
                  {'>'} project_3
                </div>
                <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                  Data Analytics Short Projects
                </h3>
                <p className="text-lg font-semibold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Power BI Dashboard Collection
                </p>

                <p className="text-foreground/90 mb-6 leading-relaxed">
                  Passionate about transforming raw data into actionable insights. These projects demonstrate proficiency in data visualization, statistical analysis, and building interactive dashboards using Power BI and Python for various domains including e-commerce, marketing, healthcare, and entertainment.
                </p>

                {/* Mini Projects List */}
                <div className="space-y-3 mb-6">
                  {analyticsProjects.map((project, i) => (
                    <a
                      key={i}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-card/30 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-card/50 transition-all duration-300 group/item"
                    >
                      <span className="text-accent font-mono text-sm">{i + 1}.</span>
                      <span className="text-foreground group-hover/item:text-accent transition-colors flex-1">
                        {project.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Python", "SQL", "Data Visualization", "Dashboard Design"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-card/50 border border-accent/30 rounded-full text-sm text-accent shimmer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
