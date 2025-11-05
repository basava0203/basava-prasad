import { TrendingUp, Award, Users } from "lucide-react";

const About = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "50%",
      label: "Decrease in Report Prep Time",
      color: "text-primary",
      glow: "box-glow-blue",
    },
    {
      icon: Award,
      value: "68%",
      label: "Improvement in Project Outcomes",
      color: "text-secondary",
      glow: "box-glow-purple",
    },
    {
      icon: Users,
      value: "100+",
      label: "Collaborative Projects",
      color: "text-accent",
      glow: "box-glow-green",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <div className="text-accent font-mono mb-2 glow-green">
            {'>'} about_me.info
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-primary">Who I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary glow-blue">
                Product & Industrial Designer
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Based in <span className="text-accent">Bengaluru, Karnataka</span>,
                I'm a Computer Science Engineer passionate about creating
                complete product experiences that merge form, function, and
                meaning.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I believe in the minimal and essential approach, expressed
                through the search for a balance between form, function, and
                meaning. My work is characterized by attention to detail and
                materials, with products that have their own formal and
                aesthetic identity.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-secondary/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-secondary glow-purple">
                User-Centered Development
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                I place user experience and communication at the center of
                development, focusing on simplicity of form and iconization of
                concepts to create intuitive and impactful solutions.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-6 animate-slide-in-right">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 hover:${metric.glow} transition-all duration-300 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${metric.color} p-4 rounded-lg bg-card/50 group-hover:scale-110 transition-transform`}
                  >
                    <metric.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-4xl font-bold ${metric.color} glow-${
                        index === 0 ? "blue" : index === 1 ? "purple" : "green"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground mt-1">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
