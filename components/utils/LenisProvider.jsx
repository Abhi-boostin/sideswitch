"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    console.log("LenisProvider: Initializing...");
    
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      console.log("LenisProvider: Lenis instance created successfully", lenis);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      console.log("LenisProvider: RAF started");

      return () => {
        console.log("LenisProvider: Cleaning up...");
        lenis.destroy();
      };
    } catch (error) {
      console.error("LenisProvider: Error initializing Lenis", error);
    }
  }, []);

  return null;
} 