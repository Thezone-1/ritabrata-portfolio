import * as si from "simple-icons";
import { tools, type Tool } from "@/lib/content";

type SimpleIcon = { path: string; hex: string };

function brandIcon(slug: string): SimpleIcon | null {
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = (si as unknown as Record<string, SimpleIcon | undefined>)[key];
  return icon ?? null;
}

// AWS and Azure DevOps were withdrawn from Simple Icons at the trademark
// holders' request, and Glowroot has no mark, so those three are drawn.
const drawn: Record<NonNullable<Tool["drawn"]>, { hex: string; path: string }> = {
  cloud: {
    hex: "#FF9900",
    path: "M6.6 19h10.9a4 4 0 0 0 .4-7.98 6 6 0 0 0-11.6-1.4A4.2 4.2 0 0 0 6.6 19Z",
  },
  loop: {
    hex: "#0078D4",
    path: "M8 8a5 5 0 1 0 0 8c3.5 0 4.5-8 8-8a5 5 0 1 1 0 8c-3.5 0-4.5-8-8-8Z",
  },
  pulse: {
    hex: "#1F49CE",
    path: "M2 12h4l2.5-7 4 14 2.6-7H22",
  },
};

export function Toolkit() {
  return (
    <>
      <div className="eyebrow">Toolkit</div>
      <div className="tools">
        {tools.map((tool) => {
          const icon = tool.slug ? brandIcon(tool.slug) : null;
          return (
            <div className="tool" key={tool.name}>
              {icon ? (
                <svg viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden>
                  <path d={icon.path} />
                </svg>
              ) : (
                tool.drawn && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={drawn[tool.drawn].hex}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={drawn[tool.drawn].path} />
                  </svg>
                )
              )}
              <span>{tool.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
