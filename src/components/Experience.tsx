import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Kodnest Technologies",
      location: "Bengaluru, Karnataka",
      period: "October 2024 - July 2025",
      achievements: [
        "Developed Sales Savvy, a comprehensive e-commerce platform with real-time tracking",
        "Implemented secure authentication and RESTful APIs for seamless data flow",
        "Achieved 50% decrease in report preparation time through automation",
        "Delivered 68% favorable increase in project outcomes",
      ],
      tech: ["React", "Java", "RESTful APIs", "E-commerce"],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(185 100% 50% / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <div className="text-accent font-mono mb-2 glow-green">
            {'>'} work_experience.log
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-primary">Professional Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-16 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary box-glow-blue animate-pulse"></div>

                {/* Content */}
                <div className="md:col-start-2 ml-20 md:ml-0">
                  <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-xl font-semibold text-secondary mb-4 glow-purple">
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-foreground/90"
                        >
                          <span className="text-accent glow-green mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card/50 border border-primary/30 rounded-full text-sm text-primary"
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

        {/* Education */}
        <div className="mt-20 animate-fade-in">
          <div className="text-accent font-mono mb-6 glow-green">
            {'>'} education.info
          </div>
          <div className="glass rounded-xl p-8 hover:border-secondary/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  B.E (Bachelor of Engineering), Computer Science & Engineering
                </h3>
                <p className="text-xl text-secondary glow-purple">
                  Guru Nanak Dev Engineering College, Bidar, Karnataka
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-muted-foreground">
                Dec 2020 - May 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
