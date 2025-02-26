
import { useState, useEffect, useRef } from "react";
import { projects, categories } from "@/lib/projects";

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".portfolio-grid-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [filteredProjects]);

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
          <div key={project.id} className="portfolio-grid-item portfolio-item opacity-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[250px] object-cover object-center rounded-xl"
              loading="lazy"
            />
            <div className="portfolio-item-overlay rounded-xl">
              <span className="text-sm font-medium mb-1 opacity-70">
                {project.category} • {project.year}
              </span>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-70 mb-3">
                Client: {project.client}
              </p>
              <p className="text-sm opacity-70">{project.description}</p>
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
