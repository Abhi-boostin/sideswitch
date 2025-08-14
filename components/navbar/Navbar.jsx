'use client'
import React, { useEffect, useState } from "react";
import NavIcon from "@/components/navbar/NavIcon";

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
        <a href="/" className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
          SideSwitch
        </a>
        <NavIcon />
      </div>
    </header>
  );
} 