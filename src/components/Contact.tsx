import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "7z9jVAS6w58OAPueG";
const EMAILJS_SERVICE_ID = "service_oipb1r5";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // TODO: Replace with your actual template ID from EmailJS dashboard

// Form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form for errors");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      toast.success("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send message. Please try again or email me directly at basavap0203@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "basavap0203@gmail.com",
      href: "mailto:basavap0203@gmail.com",
      color: "text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      color: "text-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/basava-prasad-9b1739382",
      href: "https://www.linkedin.com/in/basava-prasad-9b1739382/",
      color: "text-accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/basava0203",
      href: "https://github.com/basava0203",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="text-accent font-mono mb-2 glow-green">
            {'>'} contact.init()
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-primary">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${info.color} p-3 rounded-lg bg-card/50 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${info.color} hover:underline font-medium`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  disabled={isSubmitting}
                  required
                  className="bg-card/50 border-border focus:border-primary transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  disabled={isSubmitting}
                  required
                  className="bg-card/50 border-border focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  disabled={isSubmitting}
                  required
                  rows={5}
                  className="bg-card/50 border-border focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground box-glow-blue font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
