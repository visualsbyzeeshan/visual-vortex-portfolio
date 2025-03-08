
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import videoUrll from '../media/Advertisment.mp4'
import landingPageVideo2 from '../media/landingPageVideo2.mp4'
import cinematicVideography6 from '../media/6. Cinematic Videography.mp4';

// Featured project data with updated video URLs
const featuredProjects = [
  {
    id: "1",
    title: "Cinematic Videography",
    category: "Cinematic Videography",
    videoUrl: videoUrll,
  },
  {
    id: "2",
    title: "Promotional & Commercial",
    category: "Promotional & Commercial",
    videoUrl: landingPageVideo2,
  },
  {
    id: "3",
    title: "Visual Effects & CGI",
    category: "Visual Effects & CGI",
    videoUrl: cinematicVideography6,
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".portfolio-reveal");
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch((error) => console.log("Playback failed:", error));
    }
  };

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16 portfolio-reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Selected projects from my portfolio showcasing my skills in video
            editing, animation, and motion graphics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item portfolio-reveal opacity-0 translate-y-10 transition-all duration-700 group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] hover:z-10"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              <div className="aspect-[9/16] w-full">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[project.id] = el;
                  }}
                  src={project.videoUrl}
                  className="w-full h-full object-cover object-center rounded-xl"
                  loop
                  playsInline
                  controls={false}
                />
                
                {/* Add overlay with project information */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-xl">
                  <h3 className="text-white font-medium text-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 portfolio-reveal opacity-0 translate-y-10 transition-all duration-700">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
