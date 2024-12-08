import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

const PublicWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy(); // Clean up Lenis instance
    };
  }, []);

  return <>{children}</>;
};

export default PublicWrapper;
