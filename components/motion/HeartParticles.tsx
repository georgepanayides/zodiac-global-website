"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadHeartShape } from "@tsparticles/shape-heart";
import type { Engine } from "@tsparticles/engine";

export default function HeartParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
      await loadHeartShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none z-0">
      <Particles
        id="heart-particles"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          particles: {
            color: { value: "#d18d8dff" },
            shape: {
              type: "heart",
            },
            opacity: {
              value: { min: 0, max: 1 },
              animation: {
                enable: true,
                speed: 0.5,
                mode: "decrease",
                sync: false,
                destroy: "min",
              },
            },
            size: {
              value: { min: 8, max: 12 },
            },
            move: {
              enable: true,
              speed: { min: 2, max: 4 },
              direction: "top",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
              },
              angle: {
                offset: 0,
                value: 110, // Spread angle
              },
            },
            number: {
              value: 0, // Handled by emitter
            },
          },
          emitters: {
            direction: "top",
            rate: {
              delay: 0.15,
              quantity: 1,
            },
            position: {
              x: 50,
              y: 100,
            },
            size: {
              width: 0,
              height: 0,
            },
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.1,
            },
          },
        }}
      />
    </div>
  );
}
