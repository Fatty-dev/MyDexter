import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface PublicWrapperProps {
  children: ReactNode;
}

const PublicWrapper: React.FC<PublicWrapperProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    let animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default PublicWrapper;
