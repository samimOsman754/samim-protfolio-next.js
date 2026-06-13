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
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "connect" },
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          connect: { distance: 150, links: { opacity: 0.8 }, radius: 150 },
          push: { quantity: 10 },
          attract: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value: ["#00d4ff", "#0099ff", "#00ffcc", "#ff00ff", "#ffaa00"],
        },
        links: {
          color: "#00d4ff",
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1.2,
          frequency: 0,
          consent: false,
          triangles: {
            enable: false,
            frequency: 0,
          },
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          speed: 0.8,
          acceleration: 0.1,
          deceleration: 0.08,
          spin: {
            enable: true,
            acceleration: 0.02,
          },
        },
        number: {
          density: { enable: true, area: 900 },
          value: 100,
        },
        opacity: {
          value: { min: 0.4, max: 0.9 },
          animation: {
            enable: true,
            speed: 0.7,
            sync: false,
            startValue: "random",
          },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1.5, max: 4 },
          animation: { enable: true, speed: 1.2, sync: false },
        },
        twinkle: {
          lines: { enable: true, frequency: 0.08, opacity: 0.6 },
          particles: { enable: true, frequency: 0.08, opacity: 0.6 },
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
