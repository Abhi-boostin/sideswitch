'use client'
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 mix-blend-difference transition-transform ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="pointer-events-none h-10 w-10 opacity-0 max-sm:h-6 max-sm:w-6" />
        <a href="/">
          <img
            alt="Square43 Logo"
            width="322"
            height="38"
            className="w-80 max-w-none cursor-pointer invert max-sm:w-40"
            src="/next.svg"
          />
        </a>
        <div className="group relative h-10 w-10 cursor-pointer max-sm:h-6 max-sm:w-6">
          <div className="absolute top-0 left-0 h-0.5 w-full bg-white max-sm:h-[1px]" />
          <div className="absolute top-1/3 left-1/2 h-0.5 w-full -translate-x-1/2 bg-white transition-all max-sm:h-[1px] md:group-hover:top-1/2 md:group-hover:left-0 md:group-hover:-rotate-90" />
          <div className="absolute top-2/3 left-1/2 h-0.5 w-full -translate-x-1/2 bg-white transition-all max-sm:h-[1px] md:group-hover:top-1/2 md:group-hover:left-full md:group-hover:rotate-90" />
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white max-sm:h-[1px]" />
        </div>
      </div>
    </header>
  );
} 