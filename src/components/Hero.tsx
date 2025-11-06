import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "BASAVA PRASAD";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animate"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-primary/10 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Terminal-style intro */}
          <div className="text-sm text-accent font-mono mb-4 animate-fade-in">
            <span className="glow-green">{'>'}</span> initializing_portfolio...
          </div>

          {/* Name with typewriter effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-tech">
            <span className="glow-blue text-primary inline-block min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Tagline */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-xl md:text-3xl font-light text-foreground">
              Full Stack Developer{" "}
              <span className="text-secondary glow-purple">|</span> Cloud
              Enthusiast{" "}
              <span className="text-accent glow-green">|</span> Data Analyst
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building complete product experiences with modern technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center items-center animate-scale-in"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/80 text-primary-foreground box-glow-blue font-semibold px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground box-glow-purple font-semibold px-8"
              onClick={() => window.open("#contact", "_self")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-6 justify-center animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="https://www.linkedin.com/in/basava-prasad-9b1739382/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/basava0203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary glow-blue" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
