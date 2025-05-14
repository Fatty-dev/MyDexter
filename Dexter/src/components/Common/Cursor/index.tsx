import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Change this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const refElement = ref.current;
    if (isMobile || !refElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(refElement, {
        top: mouseY - refElement.clientHeight / 2 + "px",
        left: mouseX - refElement.clientWidth / 2 + "px",
        duration: 0.3,
        visibility: "visible",
        opacity: 1,
      });
    };

    const addCursorClass = () =>
      ref.current?.classList.add("custom-cursor--link");
    const removeCursorClass = () =>
      ref.current?.classList.remove("custom-cursor--link");

    const links = document.querySelectorAll("a, button, .m-over");

    links.forEach((link) => {
      link.addEventListener("mouseover", addCursorClass);
      link.addEventListener("mouseout", removeCursorClass);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseover", addCursorClass);
        link.removeEventListener("mouseout", removeCursorClass);
      });
    };
  }, [isMobile]);

  if (isMobile) return null; // Hide the cursor on mobile view

  return (
    <div
      className="size-8 z-[4000] border-2 border-primary custom-cursor rounded-full fixed top-0 left-0 sm:flex items-center justify-center pointer-events-none"
      ref={ref}
    >
      {/* <div className="size-1 bg-white rounded-full pointer-events-none"></div> */}
    </div>
  );
};

export default Cursor;
