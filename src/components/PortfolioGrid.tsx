
import { useState, useEffect, useRef } from "react";
import { projects, categories } from "@/lib/projects";

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  // Immediate useEffect to set initial visibility
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const items = document.querySelectorAll(".portfolio-grid-item");
      items.forEach((item) => {
        item.classList.remove("opacity-0");
        item.classList.add("opacity-100");
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setFilteredProjects(
        selectedCategory === "All"
          ? projects
          : projects.filter((project) => project.category === selectedCategory)
      );
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {
    // After filtering, apply the fade-in animation
    const fadeInTimer = setTimeout(() => {
      const items = document.querySelectorAll(".portfolio-grid-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("opacity-0");
          item.classList.add("opacity-100");
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(fadeInTimer);
  }, [filteredProjects]);

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
    <div className="py-8">
      <div className="mb-10 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-2 min-w-max md:justify-center pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-grid-item portfolio-item opacity-0 transition-opacity duration-500 hover:scale-105 hover:z-10"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            {project.videoUrl ? (
              <video
                ref={(el) => {
                  if (el) videoRefs.current[project.id] = el;
                }}
                src={project.videoUrl}
                className="w-full h-[250px] object-cover object-center rounded-xl"
                loop
                muted
                playsInline
                controls={false}
              />
            ) : (
              <div className="w-full h-[250px] bg-secondary/30 flex items-center justify-center rounded-xl">
                <p className="text-muted-foreground">No video available</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
