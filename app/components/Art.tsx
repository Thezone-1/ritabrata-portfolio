import type { Venture } from "@/lib/content";

const arts: Record<Venture["art"], React.ReactNode> = {
  bloom: (
    <>
      <rect width="340" height="112" fill="#EE5B47" />
      <g fill="none" stroke="#FFD2C6" strokeWidth="1.6" opacity=".85">
        <circle cx="268" cy="30" r="26" />
        <circle cx="268" cy="30" r="46" />
        <circle cx="268" cy="30" r="66" />
        <circle cx="268" cy="30" r="86" />
      </g>
      <circle cx="268" cy="30" r="15" fill="#FFC2B0" />
      <circle cx="64" cy="84" r="9" fill="#FFD2C6" opacity=".7" />
    </>
  ),
  rays: (
    <>
      <rect width="340" height="112" fill="#E39A1C" />
      <g stroke="#FFE6B0" strokeWidth="1.7" opacity=".8">
        <path d="M18 118 L120 -14" />
        <path d="M18 118 L176 -6" />
        <path d="M18 118 L232 14" />
        <path d="M18 118 L286 40" />
        <path d="M18 118 L330 70" />
        <path d="M18 118 L344 104" />
      </g>
      <circle cx="18" cy="118" r="30" fill="#FFD37A" />
    </>
  ),
  matrix: (
    <>
      <defs>
        <pattern id="dots-e" width="19" height="19" patternUnits="userSpaceOnUse">
          <circle cx="9.5" cy="9.5" r="3.1" fill="#8FE8D3" />
        </pattern>
      </defs>
      <rect width="340" height="112" fill="#12907B" />
      <rect width="340" height="112" fill="url(#dots-e)" opacity=".72" />
      <path
        d="M0 84 C60 44 110 96 170 62 S280 24 340 56"
        fill="none"
        stroke="#04463C"
        strokeWidth="3"
        opacity=".55"
      />
    </>
  ),
  waves: (
    <>
      <rect width="340" height="112" fill="#6B4AD4" />
      <g fill="none" stroke="#C9BAFA" strokeWidth="2" opacity=".9">
        <path d="M-10 40 C40 6 80 74 130 40 S220 6 270 40 S350 74 400 40" />
        <path d="M-10 68 C40 34 80 102 130 68 S220 34 270 68 S350 102 400 68" opacity=".6" />
      </g>
      <circle cx="130" cy="40" r="5.5" fill="#FFFFFF" />
      <circle cx="270" cy="40" r="5.5" fill="#FFFFFF" opacity=".65" />
    </>
  ),
};

export function VentureArt({ kind }: { kind: Venture["art"] }) {
  return (
    <div className="art">
      <svg viewBox="0 0 340 112" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {arts[kind]}
      </svg>
    </div>
  );
}

export function ArcsDeco() {
  return (
    <div className="deco">
      <svg viewBox="0 0 200 200" aria-hidden>
        <g fill="none" stroke="#FFFFFF" strokeWidth="2">
          <circle cx="150" cy="150" r="34" />
          <circle cx="150" cy="150" r="58" />
          <circle cx="150" cy="150" r="82" />
          <circle cx="150" cy="150" r="106" />
          <circle cx="150" cy="150" r="130" />
        </g>
      </svg>
    </div>
  );
}

export function GoldDeco() {
  return (
    <div className="deco gold">
      <svg viewBox="0 0 200 200" aria-hidden>
        <defs>
          <pattern id="dots-g" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" fill="#C9A961" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-g)" />
      </svg>
    </div>
  );
}

export function WritingStrip() {
  return (
    <div className="strip">
      <svg viewBox="0 0 300 88" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="wg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1F49CE" />
            <stop offset="1" stopColor="#6B4AD4" />
          </linearGradient>
        </defs>
        <rect width="300" height="88" fill="url(#wg)" />
        <g fill="#FFFFFF" opacity=".3">
          <rect x="26" y="26" width="128" height="7" rx="3.5" />
          <rect x="26" y="42" width="92" height="7" rx="3.5" />
          <rect x="26" y="58" width="112" height="7" rx="3.5" />
        </g>
        <circle cx="242" cy="30" r="27" fill="#EE5B47" opacity=".9" />
        <circle cx="274" cy="58" r="17" fill="#E39A1C" />
      </svg>
    </div>
  );
}
