import { Code, Database, Cloud, TestTube, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "text-primary",
      glow: "box-glow-blue",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Backend",
      color: "text-secondary",
      glow: "box-glow-purple",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-accent",
      glow: "box-glow-green",
      skills: [
        { name: "SQL", level: 85 },
        { name: "NoSQL", level: 80 },
        { name: "MongoDB", level: 82 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-primary",
      glow: "box-glow-blue",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Snowflake", level: 75 },
      ],
    },
    {
      icon: TestTube,
      title: "Testing",
      color: "text-secondary",
      glow: "box-glow-purple",
      skills: [{ name: "Selenium", level: 85 }],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="scanline w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <div className="text-accent font-mono mb-2 glow-green">
            {'>'} technical_skills.list()
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-primary">Technology Stack</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass rounded-xl p-6 hover:${category.glow} transition-all duration-300 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${category.color} p-3 rounded-lg bg-card/50 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-card/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          index % 3 === 0
                            ? "from-primary to-primary/50"
                            : index % 3 === 1
                            ? "from-secondary to-secondary/50"
                            : "from-accent to-accent/50"
                        } rounded-full transition-all duration-1000 ease-out ${
                          index % 3 === 0
                            ? "box-glow-blue"
                            : index % 3 === 1
                            ? "box-glow-purple"
                            : "box-glow-green"
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index + i) * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Interests Section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-accent font-mono mb-6 glow-green">
            {'>'} future_interests.explore()
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group">
              <div className="text-2xl font-bold text-primary mb-3 glow-blue">
                DevOps Pathway
              </div>
              <p className="text-foreground/80">
                Exploring CI/CD pipelines, containerization with Docker, and
                Kubernetes orchestration for scalable deployments.
              </p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-secondary/40 transition-all duration-300 group">
              <div className="text-2xl font-bold text-secondary mb-3 glow-purple">
                Data Analytics
              </div>
              <p className="text-foreground/80">
                Diving deep into data visualization, statistical analysis, and
                machine learning to derive actionable insights.
              </p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group">
              <div className="text-2xl font-bold text-accent mb-3 glow-green">
                Cloud Technologies
              </div>
              <p className="text-foreground/80">
                Advancing expertise in multi-cloud architectures, serverless
                computing, and cloud-native application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
