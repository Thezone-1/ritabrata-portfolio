"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/content";

function useCountUp(target: string, run: boolean) {
  const [text, setText] = useState(target);

  useEffect(() => {
    if (!run) return;
    const match = target.match(/^(\d+)/);
    if (!match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const end = parseInt(match[1], 10);
    const rest = target.slice(match[1].length);
    let start: number | null = null;
    let frame = 0;

    const step = (now: number) => {
      if (start === null) start = now;
      const p = Math.min((now - start) / 1400, 1);
      setText(Math.round(end * (1 - Math.pow(1 - p, 3))) + rest);
      if (p < 1) frame = requestAnimationFrame(step);
    };

    setText("0" + rest);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);

  return text;
}

function Figure({ value, label, run }: { value: string; label: string; run: boolean }) {
  const shown = useCountUp(value, run);
  return (
    <div className="fig">
      <b>{shown}</b>
      <span style={{ whiteSpace: "pre-line" }}>{label}</span>
    </div>
  );
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setRun(true);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="eyebrow">By the numbers</div>
      <div className="figs">
        {metrics.map((m) => (
          <Figure key={m.value + m.label} value={m.value} label={m.label} run={run} />
        ))}
      </div>
    </div>
  );
}
