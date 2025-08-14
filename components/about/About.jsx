import React, { useRef } from "react";
import { AnimatedBeam } from "@/src/components/magicui/animated-beam";

export default function About() {
  const containerRef = useRef(null);
  const fromARef = useRef(null);
  const fromBRef = useRef(null);
  const fromCRef = useRef(null);
  const toRef = useRef(null);

  return (
    <section className="py-16">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
      >
        {/* Multiple Inputs (Left) */}
        <div className="space-y-6">
          <div ref={fromARef} className="rounded-xl bg-white/60 p-4 shadow-sm">Input A</div>
          <div ref={fromBRef} className="rounded-xl bg-white/60 p-4 shadow-sm">Input B</div>
          <div ref={fromCRef} className="rounded-xl bg-white/60 p-4 shadow-sm">Input C</div>
        </div>

        {/* Center Copy */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Animated Beam</h3>
          <p className="text-black/70">
            Showcasing multiple inputs flowing into one destination using Magic UI’s Animated Beam.
          </p>
        </div>

        {/* Single Output (Right) */}
        <div ref={toRef} className="relative rounded-xl bg-white/60 p-6 shadow-sm min-h-[160px]">
          Output
          {/* Beams */}
          <AnimatedBeam containerRef={containerRef} fromRef={fromARef} toRef={toRef} curvature={80} />
          <AnimatedBeam containerRef={containerRef} fromRef={fromBRef} toRef={toRef} curvature={60} pathColor="#9c40ff" gradientStartColor="#9c40ff" gradientStopColor="#ffaa40" />
          <AnimatedBeam containerRef={containerRef} fromRef={fromCRef} toRef={toRef} curvature={40} pathColor="#ffaa40" />
        </div>
      </div>
    </section>
  );
} 