
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Featured project data with direct video URLs
const featuredProjects = [
  {
    id: "1",
    title: "Cinematic Videography",
    category: "Cinematic Videography",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop",
    videoUrl: "https://drive.google.com/uc?export=download&id=1K4ORhPhlubdsCwfZ7ORPrh2XEs9cRRYs",
  },
  {
    id: "2",
    title: "Promotional & Commercial",
    category: "Promotional & Commercial",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop",
    videoUrl: "https://drive.google.com/uc?export=download&id=1RjhVy_iPK3Qy54swQEUWdnCzGkYX5NwT",
  },
  {
    id: "3",
    title: "Visual Effects & CGI",
    category: "Visual Effects & CGI",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=1170&auto=format&fit=crop",
    videoUrl: "https://drive.google.com/uc?export=download&id=1DAYTwWQn0WsF7tLfbc6kZukWaMS_3MG4",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item portfolio-reveal opacity-0 translate-y-10 transition-all duration-700 hover:scale-105 hover:z-10 relative overflow-hidden rounded-xl"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[project.id] = el;
                }}
                src={project.videoUrl}
                className="w-full h-[250px] object-cover object-center rounded-xl"
                loop
                muted
                playsInline
                poster={project.image}
                controls={false}
              />
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
