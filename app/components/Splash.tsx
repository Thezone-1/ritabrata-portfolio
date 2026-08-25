"use client";

import { useEffect, useRef, useState } from "react";
import { greetings } from "@/lib/content";

export function Splash() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let greeted = false;
    try {
      greeted = sessionStorage.getItem("greeted") === "1";
    } catch {}

    if (still || greeted) {
      setGone(true);
      return;
    }

    root.dataset.splash = "on";
    timer.current = setInterval(() => {
      setIndex((i) => {
        if (i + 1 < greetings.length) return i + 1;
        if (timer.current) clearInterval(timer.current);
        try {
          sessionStorage.setItem("greeted", "1");
        } catch {}
        setTimeout(() => {
          delete root.dataset.splash;
          setLeaving(true);
          setTimeout(() => setGone(true), 800);
        }, 620);
        return i;
      });
    }, 175);

    return () => {
      if (timer.current) clearInterval(timer.current);
      delete root.dataset.splash;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bg"
      style={{
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : undefined,
        transition: "opacity .7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <span
        key={index}
        className="font-serif text-ink"
        style={{
          fontSize: "clamp(40px, 8vw, 66px)",
          lineHeight: 1.15,
          textAlign: "center",
          padding: "0 24px",
          animation: "gpop .24s ease-out both",
        }}
      >
        {greetings[index]}
      </span>
    </div>
  );
}
