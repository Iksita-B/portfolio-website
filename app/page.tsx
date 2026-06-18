"use client";

import { useState, useMemo } from "react";
import ProjectCard, { type Project } from "./components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "Kanban-style project management tool with drag-and-drop boards, team collaboration, deadline tracking, and notifications.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://task-management-seven-flax.vercel.app/",
    githubUrl: "https://github.com/Iksita-B/task-management",
    featured: false,
  },
  {
    id: 2,
    title: "World Bank Dashboard",
    description:
      "A professional analytics dashboard showcasing World Bank economic data for 211+ countries. Features interactive charts, advanced search filtering, detailed country indicators, and a fully responsive dark-themed interface.",
    tags: ["React.js", "Recharts", "CSS"],
    liveUrl: "https://world-bank-dashboard-gilt.vercel.app/",
    githubUrl: "https://github.com/Iksita-B/world-bank-dashboard",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather visualization with current conditions, forecasts, interactive charts, and a responsive user interface powered by live weather data.",
    tags: ["React.js", "Chart.js", "CSS"],
    liveUrl: "https://weather-dashboard-gamma-olive.vercel.app/",
    githubUrl: "https://github.com/Iksita-B/weather-dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description:
      "This very portfolio — built with Next.js and Tailwind CSS, featuring a dynamic project showcase and floating animations.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    liveUrl: "https://texembourg.in",
    githubUrl: "https://github.com/Iksita-B/portfolio-website",
    featured: false,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <main className="relative flex-1 overflow-hidden">

      {/* ────────────────────────────────────────────
          Floating background blobs (fixed, behind content)
      ──────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large blobs */}
        <div
          className="blob-a absolute w-72 h-72 bg-[#294c60]/18 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] blur-3xl"
          style={{ top: "4%", left: "-6%" }}
        />
        <div
          className="blob-b absolute w-96 h-96 bg-[#ffc49b]/6 rounded-[60%_40%_40%_60%/60%_60%_40%_40%] blur-3xl"
          style={{ top: "18%", right: "-12%" }}
        />
        <div
          className="blob-c absolute w-80 h-80 bg-[#294c60]/14 rounded-full blur-3xl"
          style={{ bottom: "28%", left: "18%" }}
        />
        <div
          className="blob-d absolute w-56 h-56 bg-[#ffc49b]/7 rounded-[50%_50%_30%_70%/50%_70%_30%_50%] blur-2xl"
          style={{ bottom: "8%", right: "8%" }}
        />
        <div
          className="blob-a2 absolute w-64 h-64 bg-[#294c60]/12 rounded-[70%_30%_30%_70%/70%_70%_30%_30%] blur-2xl"
          style={{ top: "52%", left: "42%" }}
        />
        <div
          className="blob-b2 absolute w-80 h-80 bg-[#ffc49b]/4 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl"
          style={{ top: "-8%", left: "28%" }}
        />
        {/* Small sparkle dots */}
        <div className="blob-sp  absolute w-2.5 h-2.5 bg-[#ffc49b]/80 rounded-full" style={{ top: "14%", left: "24%" }} />
        <div className="blob-sp2 absolute w-2   h-2   bg-[#ffc49b]/60 rounded-full" style={{ top: "62%", right: "18%" }} />
        <div className="blob-sp3 absolute w-1.5 h-1.5 bg-[#adb6c4]/50 rounded-full" style={{ top: "36%", left: "68%" }} />
        <div className="blob-sp  absolute w-2   h-2   bg-[#ffc49b]/70 rounded-full" style={{ bottom: "22%", left: "52%" }} />
        <div className="blob-sp2 absolute w-1.5 h-1.5 bg-[#adb6c4]/40 rounded-full" style={{ top: "80%", left: "30%" }} />
      </div>

      {/* ────────────────────────────────────────────
          Page content
      ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <section className="pt-14 sm:pt-20 md:pt-24 pb-10 sm:pb-14 text-center">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#294c60]/40 border border-[#294c60]/70 rounded-full text-[#adb6c4] text-xs sm:text-sm mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-throb shrink-0 dot-wave" />
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ffefd3] leading-tight mb-4 sm:mb-5">
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-[#ffc49b]">
              Iksita B
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffc49b]/40 rounded-full" />
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-[#adb6c4] text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed">
            Frontend Developer crafting fast, beautiful, and accessible web experiences.
          </p>

          {/* ── Search bar ── */}
          <div className="relative max-w-2xl mx-auto">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-4 sm:left-5 flex items-center pointer-events-none">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#adb6c4]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, technologies, frameworks…"
              className="w-full bg-[#294c60]/30 border border-[#294c60] rounded-2xl py-4 sm:py-5 pl-12 sm:pl-14 pr-12 text-[#ffefd3] placeholder-[#adb6c4]/60 text-base sm:text-lg focus:outline-none focus:border-[#ffc49b]/70 focus:ring-4 focus:ring-[#ffc49b]/10 backdrop-blur-sm transition-all duration-300"
            />

            {/* Clear button */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-4 flex items-center text-[#adb6c4] hover:text-[#ffefd3] transition-colors duration-150"
                aria-label="Clear search"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6M9 9l6 6" />
                </svg>
              </button>
            )}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="pb-16 sm:pb-20">

          {/* Section header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-[#ffefd3] text-xl sm:text-2xl font-bold">My Work</h2>
            <span className="text-[#adb6c4] text-xs sm:text-sm">
              {filtered.length === projects.length
                ? `${projects.length} projects`
                : `${filtered.length} of ${projects.length}`}
            </span>
          </div>

          {/* Grid or empty state */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center py-20 text-center">
              <span className="text-5xl mb-4 select-none">🔍</span>
              <p className="text-[#ffefd3] text-lg font-medium">No projects found</p>
              <p className="text-[#adb6c4] text-sm mt-2 max-w-xs">
                Try a different keyword, technology, or framework name.
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-5 text-[#ffc49b] hover:text-[#ffefd3] text-sm underline underline-offset-2 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
