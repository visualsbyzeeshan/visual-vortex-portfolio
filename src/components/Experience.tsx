
import { useEffect, useRef } from "react";

const experienceData = [
  {
    period: "2022 - Present",
    position: "Senior Video Editor & Animator",
    company: "CreativeVision Studios",
    description:
      "Lead video editor for major brand campaigns, coordinating with directors and marketing teams to craft compelling visual narratives. Specialized in high-end compositing and color grading for premium clients.",
  },
  {
    period: "2019 - 2022",
    position: "Motion Graphics Designer",
    company: "Digital Pulse Media",
    description:
      "Created broadcast-quality motion graphics for television networks and streaming platforms. Developed style guides and animation systems for consistent brand identity across campaigns.",
  },
  {
    period: "2017 - 2019",
    position: "Video Editor",
    company: "FilmCraft Productions",
    description:
      "Edited short films, documentaries, and commercial content with a focus on storytelling and pacing. Collaborated with directors to achieve artistic vision while meeting technical requirements.",
  },
  {
    period: "2015 - 2017",
    position: "Junior Animator",
    company: "Animation Nexus",
    description:
      "Assisted senior animators in creating 2D and 3D animations for clients in the entertainment and advertising industries. Developed skills in character animation and motion principles.",
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
            Over 8 years of professional experience in video editing, animation,
            and motion graphics for leading brands and studios.
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
