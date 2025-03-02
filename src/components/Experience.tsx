
import { useEffect, useRef } from "react";

const experienceData = [
  {
    period: "Present",
    position: "Freelance Video Editor, Animator & VFX Artist",
    company: "Various Clients",
    description:
      "Editing short films, commercials, and product videos. Creating motion graphics and animated intros. Using Adobe Premiere Pro and After Effects for smooth transitions and effects. Applying VFX techniques like tracking, green screen removal, and compositing. Focusing on sound design and audio mixing, working closely with clients to deliver high-quality content.",
  },
  {
    period: "1 Year",
    position: "Video Editor, Animator, VFX Artist",
    company: "Brand Makers",
    description:
      "Edited brand ads, promotional videos, and social media content aligned with brand identity. Designed motion graphics and animations for dynamic content. Applied cinematic transitions, smooth cuts, and high-end color grading. Collaborated with creative teams to shape resonant stories. Optimized content for various social media platforms.",
  },
];

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".experience-item");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("opacity-100");
                el.classList.remove("translate-y-10", "opacity-0");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-custom" ref={experienceRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Over a year of professional experience in video editing, animation,
            and visual effects for brands and content creators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 pl-8 ml-4">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="experience-item mb-16 last:mb-0 opacity-0 translate-y-10 transition-all duration-700"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] mt-1.5 ring-4 ring-background" />
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary-foreground mb-2">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                <h4 className="text-md text-muted-foreground mb-4">
                  {item.company}
                </h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
