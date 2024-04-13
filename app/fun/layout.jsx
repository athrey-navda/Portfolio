"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function FunLayout({ children }) {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const [particlesOptions, setParticlesOptions] = useState(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      const updatedOptions = {
        ...options,
        particles: {
          ...options.particles,
          color: {
            value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            ...options.particles.links,
            value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          },
        },
      };
      setParticlesOptions(updatedOptions);
    }
  }, [resolvedTheme]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 90,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        links: {
          value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [resolvedTheme]
  );

  return (
    <div style={{ position: "relative" }}>
      {init && particlesOptions && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}
      {children}
    </div>
  );
}
