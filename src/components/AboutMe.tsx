
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
                src="/lovable-uploads/d093b3b7-b816-4547-a7a6-a9628ad19a39.png"
                alt="S. Wasil Ali - Video Editor & Animator"
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
              <h4 className="text-2xl font-bold">S. Wasil Ali</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm Syed Wasil Ali, a Video Editor, Animator, and VFX Artist passionate about bringing ideas to life. 
                With over a year of experience, I've worked on brand commercials, social media content, short films, 
                and motion graphics, always aiming for engaging visuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I started with a love for storytelling and post-production magic. I've collaborated with Brand Makers 
                and freelanced with various brands, using Adobe Premiere Pro, After Effects, and color grading to enhance content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond editing, I constantly explore new techniques and push creative limits. I believe every frame 
                tells a story, and I'm dedicated to making each one as impactful as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
