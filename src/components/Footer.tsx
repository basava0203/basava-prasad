const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 Basava Prasad. Built with React & Tailwind CSS.
          </div>
          <div className="text-accent font-mono text-sm glow-green">
            {'>'} status: ready_to_innovate
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
