"use client";
import React from "react";

export function TextAnimate({ children, className = "", delay = 0, duration = 300 }) {
  if (typeof children !== "string") return null;
  const chars = Array.from(children);
  const baseDelay = Number(delay) || 0;
  const perChar = Number(duration) / 1000 / Math.max(chars.length, 1);
  return (
    <span className={`whitespace-pre-wrap ${className}`} aria-label={children}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="inline-block will-change-transform animate-slide-left"
          style={{ animationDelay: `${baseDelay + i * perChar}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
} 