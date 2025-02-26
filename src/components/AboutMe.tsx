
import { User } from "lucide-react";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const sections = aboutRef.current?.querySelectorAll(".animate-on-scroll");
    sections?.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections?.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={aboutRef} className="container-custom">
        <div className="text-center mb-14">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              About Me
            </h2>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <h3 className="section-title">Get to know me</h3>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <p className="section-subtitle">
              I'm passionate about creating visual stories that captivate and inspire.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-secondary/20">
              <img
                src="/about-image.jpg"
                alt="Wasil Ali - Video Editor & Animator"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                  e.currentTarget.onerror = null; // Prevent infinite error loop
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <div className="space-y-6 text-left">
              <h4 className="text-2xl font-bold">Wasil Ali</h4>
              <p className="text-muted-foreground leading-relaxed">
                With over 8 years of experience in video editing and animation, I specialize in creating compelling visual 
                narratives for brands, agencies, and content creators. My approach combines technical expertise with creative 
                storytelling to deliver projects that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I graduated from the University of Arts with a degree in Digital Media, and have worked with clients ranging from 
                startups to established brands like Netflix, Adobe, and Google. My work has been featured in several 
                film festivals and industry showcases.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not editing or animating, you can find me exploring new filmmaking techniques, photographing urban 
                landscapes, or mentoring aspiring editors through online workshops.
              </p>
              
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:contact@wasilali.com" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
