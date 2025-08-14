import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          className="w-screen h-auto max-h-screen object-contain scale-[1.8] sm:w-full sm:h-full sm:object-cover sm:scale-70"
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>
    </section>
  );
} 