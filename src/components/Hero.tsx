
import { ArrowDownCircle, ArrowRight, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container-custom pt-10 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <h2 className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              Video Editor & Animator
            </h2>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Bringing stories to life <br /> through motion and visuals
            </h1>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
              I create compelling visual narratives that captivate audiences and elevate brands
              through thoughtful editing and animation.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/wasil-ali-resume.pdf"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
            >
              Download Resume <FileText className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#experience"
          aria-label="Scroll to experience section"
          className="inline-block text-muted-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowDownCircle className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
