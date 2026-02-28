"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Need to install @tsparticles/react , @tsparticles/engine and @tsparticles/slim packages
// npm install @tsparticles/react @tsparticles/engine @tsparticles/slim

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Transparent for overlay use
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "attract" },
        },
        modes: {
          push: { quantity: 8 },
          attract: { distance: 150, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value: ["#00d4ff", "#0099ff", "#00ffcc", "#ff00ff", "#ffaa00"],
        },
        links: {
          color: "#00d4ff",
          distance: 200,
          enable: true,
          opacity: 0.6,
          width: 1.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          speed: 1.5,
          acceleration: 0.1,
          deceleration: 0.1,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: { enable: true, speed: 1, sync: false },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 2, max: 6 },
          animation: { enable: true, speed: 2, sync: false },
        },
        twinkle: {
          lines: { enable: true, frequency: 0.05, opacity: 0.5 },
          particles: { enable: true, frequency: 0.05, opacity: 0.5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 "
    />
  );
}
