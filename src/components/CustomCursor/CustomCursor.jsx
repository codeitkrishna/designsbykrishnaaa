import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const hoverRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const hover = hoverRef.current;

    // Update cursor positions
    const updateCursorPosition = () => {
      if (dot && hover) {
        const { x, y } = mousePosition.current;

        // Update positions
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        hover.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(updateCursorPosition);
    };

    // Handle mouse move
    const onMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Hover effect for interactive elements
    const addHoverEffect = () => hover.classList.add("active");
    const removeHoverEffect = () => hover.classList.remove("active");

    // Start animation loop
    rafId.current = requestAnimationFrame(updateCursorPosition);

    // Add mousemove event
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Add hover listeners
    const interactiveElements = document.querySelectorAll(
      "a, button, input, select, span, textarea, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={hoverRef} className="cursor-hover" />
    </>
  );
};

export default CustomCursor;