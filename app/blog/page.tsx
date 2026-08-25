import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WritingStrip } from "../components/Art";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `Writing · ${profile.name}`,
  description: `Notes on performance, reliability and delivery by ${profile.name}.`,
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <div className="shell" style={{ maxWidth: 820, paddingBottom: 64 }}>
      <Link
        href="/"
        className="font-mono inline-flex items-center gap-2 uppercase"
        style={{ paddingTop: 34, fontSize: 11.5, letterSpacing: ".14em", color: "var(--muted)" }}
      >
        <ArrowLeft size={15} strokeWidth={1.7} />
        {profile.name}
      </Link>

      <h1
        className="font-serif"
        style={{ fontSize: 54, lineHeight: 1.08, letterSpacing: "-.014em", margin: "34px 0 12px" }}
      >
        Writing
      </h1>
      <p className="body-text" style={{ fontSize: 18, lineHeight: 1.55, margin: "0 0 40px", maxWidth: "46ch" }}>
        Notes on performance, reliability and the parts of delivery that do not fit in a ticket.
      </p>

      <div className="card">
        <WritingStrip />
        <div className="eyebrow">Nothing published yet</div>
        <h2 className="h4">First posts are on the way.</h2>
        <div className="todo">
          <div
            className="font-mono mb-2 uppercase"
            style={{ fontSize: 10.5, letterSpacing: ".16em", color: "var(--accent)" }}
          >
            To fill in
          </div>
          <p className="body-text" style={{ fontSize: 14 }}>
            [RITABRATA: send three post titles with one line each, and where you publish. Each
            becomes a card here.]
          </p>
        </div>
      </div>
    </div>
  );
}
