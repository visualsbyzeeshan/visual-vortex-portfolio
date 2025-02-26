
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import PortfolioSection from "@/components/PortfolioSection";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <Hero />
      <Experience />
      <PortfolioSection />
    </main>
  );
};

export default Index;
