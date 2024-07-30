"use client";

import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full transition-all duration-75"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${
          position.y
        }px, ${getGradientColor()})`,
      }}
    ></div>
  );
}

const getGradientColor = () => {
  if (document.documentElement.classList.contains("dark")) {
    return "rgba(255, 105, 180, 0.7) 0%, rgba(255, 105, 180, 0) 2%";
  }
  return "rgba(135, 206, 250, 0.7) 0%, rgba(135, 206, 250, 0) 2%";
};
