import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cloud, ShieldCheck } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { Metrics } from "./components/Metrics";
import { Toolkit } from "./components/Toolkit";
import { ArcsDeco, GoldDeco, VentureArt, WritingStrip } from "./components/Art";
import { about, certifications, education, profile, roles, ventures } from "@/lib/content";

export default function Home() {
  const [pwc, real] = roles;

  return (
    <div className="shell">
      <div className="hero">
        <h1>
          <span className="hline">
            <i>{profile.name}</i>
          </span>
        </h1>
        <p>{profile.tagline}</p>
      </div>

      <div className="bento">
        <Reveal className="card portrait col-span-4">
          <Image
            src="/portrait-desk.webp"
            alt={profile.name}
            fill
            sizes="(max-width: 980px) 100vw, 33vw"
            priority
          />
          <div className="plate">
            <div className="font-serif" style={{ fontSize: 27 }}>
              {profile.name}
            </div>
          </div>
        </Reveal>

        <Reveal className="card about col-span-5" delay={0.07}>
          <div className="eyebrow">About</div>
          <h2 className="h3">{about.heading}</h2>
          <p className="body-text">{about.paragraph}</p>
          <p
            className="font-serif"
            style={{ fontSize: 19, lineHeight: 1.45, color: "var(--ink)", margin: "6px 0 0" }}
          >
            {about.closer}
          </p>
          <div className="sig" aria-hidden>
            {about.signature}
          </div>
        </Reveal>

        <div className="stack col-span-3">
          <Reveal className="card dark justify-between" delay={0.14}>
            <div className="eyebrow">Connect</div>
            <div className="flex flex-col">
              <a className="row" href={profile.linkedin}>
                <span className="lbl">LinkedIn</span>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
              <a className="row" href={profile.x}>
                <span className="lbl">X</span>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
              <a className="row" href={`mailto:${profile.email}`}>
                <span className="lbl">Email</span>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            </div>
          </Reveal>

          <Reveal className="card" delay={0.21}>
            <WritingStrip />
            <div className="eyebrow">Writing</div>
            <h3 className="h4">Notes on performance and reliability.</h3>
            <Link className="btn" href="/blog">
              Read the blog
              <ArrowRight size={15} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>

        <Reveal className="card col-span-12">
          <Metrics />
        </Reveal>

        <Reveal className="card col-span-7">
          <div className="eyebrow">
            {pwc.period} &middot; {pwc.company}
          </div>
          <h3 className="h3">{pwc.title}</h3>
          <p className="body-text">{pwc.summary}</p>
          <div className="mt-1 flex flex-col">
            {pwc.stats?.map((s) => (
              <div className="stat" key={s.key}>
                <b>{s.key}</b>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="card col-span-5" delay={0.07}>
          <div className="eyebrow">
            {real.period} &middot; {real.company}
          </div>
          <h3 className="h3">{real.title}</h3>
          <p className="body-text">{real.summary}</p>
          <div className="todo">
            <div
              className="font-mono mb-2 uppercase"
              style={{ fontSize: 10.5, letterSpacing: ".16em", color: "var(--accent)" }}
            >
              To fill in
            </div>
            <p className="body-text" style={{ fontSize: 14 }}>
              {real.todo}
            </p>
          </div>
        </Reveal>

        <Reveal className="card accent col-span-4" delay={0.14}>
          <ArcsDeco />
          <ShieldCheck size={38} strokeWidth={1.05} />
          <h3 className="h3 mt-1">{certifications.primary.title}</h3>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11.5, letterSpacing: ".14em" }}
          >
            {certifications.primary.level} &middot; {certifications.primary.code}
          </div>
          <p className="body-text">{certifications.primary.body}</p>
        </Reveal>

        <Reveal className="card dark col-span-4" delay={0.21}>
          <GoldDeco />
          <Cloud size={38} strokeWidth={1.05} color="#C9A961" />
          <h3 className="h3 mt-1">{certifications.secondary.title}</h3>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11.5, letterSpacing: ".14em", color: "#C9A961" }}
          >
            {certifications.secondary.level} &middot; {certifications.secondary.code}
          </div>
          <p className="body-text">{certifications.secondary.body}</p>
        </Reveal>

        <Reveal className="card col-span-4">
          <div className="eyebrow">Also certified</div>
          <div className="flex flex-col">
            {certifications.others.map((c) => (
              <div className="stat flex-col gap-1.5" key={c.title}>
                <h4 className="h4">{c.title}</h4>
                <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>
                  {c.body}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {ventures.map((v, i) => (
          <Reveal className="card col-span-3" key={v.name} delay={(i % 4) * 0.07}>
            <VentureArt kind={v.art} />
            <div className="eyebrow">{v.role}</div>
            <h4 className="h3">{v.name}</h4>
            <p className="body-text">{v.body}</p>
          </Reveal>
        ))}

        <Reveal className="card col-span-7">
          <Toolkit />
        </Reveal>

        <Reveal className="card col-span-5" delay={0.07}>
          <div className="eyebrow">Education and honours</div>
          <h4 className="h4">{education.degree}</h4>
          <div className="font-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {education.school}
          </div>
          <p className="body-text">{education.note}</p>
          <div className="flex flex-col">
            {education.honours.map((h) => (
              <div className="stat" key={h.text}>
                <b>{h.key}</b>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="card col-span-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="font-serif" style={{ fontSize: 23 }}>
              Thanks for scrolling this far.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a
                className="font-mono uppercase"
                style={{ fontSize: 12, letterSpacing: ".12em", color: "var(--muted)" }}
                href={`mailto:${profile.email}`}
              >
                Email
              </a>
              <a
                className="font-mono uppercase"
                style={{ fontSize: 12, letterSpacing: ".12em", color: "var(--muted)" }}
                href={profile.linkedin}
              >
                LinkedIn
              </a>
              <a
                className="font-mono uppercase"
                style={{ fontSize: 12, letterSpacing: ".12em", color: "var(--muted)" }}
                href={profile.x}
              >
                X
              </a>
              <span
                className="font-mono uppercase"
                style={{ fontSize: 12, letterSpacing: ".12em", color: "var(--deep-muted)" }}
              >
                &copy; 2026 {profile.name}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
