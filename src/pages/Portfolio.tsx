
import PortfolioGrid from "@/components/PortfolioGrid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const location = useLocation();

  // Scroll to top when the component mounts or path changes
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Portfolio page loaded at path:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-28 pb-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A curated selection of my work in video editing, animation, and
            motion graphics
          </p>
        </div>
        
        <PortfolioGrid />
      </div>
    </main>
  );
};

export default Portfolio;
