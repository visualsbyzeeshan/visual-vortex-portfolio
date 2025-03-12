
import { useState, useEffect, useRef } from "react";
import { projects, categories, isSquareAspectRatio } from "@/lib/projects";

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  // Video IDs to filter out from "All" category
  const excludedVideoIds = ["pc1", "pc2", "pc4", "vma1", "ve1", "cv4", "ve3", "ve4", "ve5"];

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
      let filtered = selectedCategory === "All"
        ? projects.filter(project => !excludedVideoIds.includes(project.id))
        : projects.filter((project) => project.category === selectedCategory);
      
      // Sort filtered projects by aspect ratio for the "All" category
      if (selectedCategory === "All") {
        // First vertical (9:16), then square (1:1), then horizontal (16:9)
        filtered = [
          // Vertical videos (9:16) - Visual Motion Art that are not square
          ...filtered.filter(project => 
            project.category === "Visual Motion Art" && 
            !isSquareAspectRatio(project.id)
          ),
          // Square videos (1:1)
          ...filtered.filter(project => 
            isSquareAspectRatio(project.id)
          ),
          // Horizontal videos (16:9) - Youtube Content and others that are not square or vertical Visual Motion Art
          ...filtered.filter(project => 
            project.category === "Youtube Content" || 
            (project.category !== "Visual Motion Art" && !isSquareAspectRatio(project.id))
          ),
        ];
      }
      
      setFilteredProjects(filtered);
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
    <div className="py-12">
      {/* Category filters with improved styling */}
      <div className="mb-14 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-3 min-w-max md:justify-center pb-2">
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

      {/* Portfolio grid with dynamic aspect ratio based on category and video */}
      <div
        ref={gridRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-grid-item opacity-0 transition-opacity duration-500 group mb-8"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <div 
              className={`relative w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.03] hover:z-10 hover:shadow-lg ${
                project.category === "Youtube Content" 
                  ? "aspect-[16/9]" 
                  : project.category === "Visual Motion Art" && isSquareAspectRatio(project.id)
                    ? "aspect-square" 
                    : "aspect-[9/16]"
              }`}
            >
              {project.videoUrl ? (
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
              ) : (
                <div className="w-full h-full bg-secondary/30 flex items-center justify-center rounded-xl">
                  <p className="text-muted-foreground">No video available</p>
                </div>
              )}
              
              {/* Overlay with category name only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-xl">
                <p className="text-white/80 text-sm">{project.category}</p>
              </div>
            </div>
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
