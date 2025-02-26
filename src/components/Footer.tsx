
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-20 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-12 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          <div className="text-center max-w-lg mx-auto mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">
              Wasil Ali
            </h2>
            <p className="text-muted-foreground">
              Video Editor & Animator specializing in creating compelling visual
              narratives for brands and storytellers.
            </p>
          </div>

          <div className="flex space-x-4 mb-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@wasilali.com"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex space-x-6 mb-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wasil Ali. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
