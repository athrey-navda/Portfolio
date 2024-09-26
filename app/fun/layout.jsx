"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function FunLayout({ children }) {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const [particlesOptions, setParticlesOptions] = useState(null);
  const effectToggleRef = useRef(true);
  const toggleEffectTimerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      const updatedOptions = effectToggleRef.current
        ? fireflyEffectOptions
        : normalEffectOptions;
      setParticlesOptions(updatedOptions);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    toggleEffectTimerRef.current = setInterval(() => {
      effectToggleRef.current = !effectToggleRef.current;
      const updatedOptions = effectToggleRef.current
        ? fireflyEffectOptions
        : normalEffectOptions;
      setParticlesOptions(updatedOptions);
    }, 10000);

    return () => clearInterval(toggleEffectTimerRef.current);
  }, []);

  const fireflyEffectOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffdd55",
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 30,
        },
        opacity: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
      },
      detectRetina: true,
    }),
    [resolvedTheme]
  );

  const normalEffectOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 110,
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
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        links: {
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          distance: 300,
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
          value: 5,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 },
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
