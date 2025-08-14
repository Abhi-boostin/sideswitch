import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden px-6">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          className="mx-auto w-[165vw] sm:w-[70vw] md:w-[60vw] max-w-4xl h-auto object-contain"
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