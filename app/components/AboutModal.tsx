"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const WHATSAPP = "+917339234466";
const PHONE    = "+917339234466";
const EMAIL    = "iksita2000@gmail.com";

const experience = [
  {
    role: "Associate Consultant",
    company: "Skandavel Webtech",
    period: "2025 – Present",
    desc: "Delivered a UK-wide utility platform for water and gas connection services, advancing to a senior role while leading client discussions and frontend delivery.",
  },
  {
    role: "Application Developer",
    company: "Four Junctions",
    period: "2024 – 2025",
    desc: "Developed and maintained applications for global clients, including Perkins&Will and Sidara, building solutions for Community Events, Project Tracking, and Leave Management platforms using React.js and modern web technologies.",
  },
  {
    role: "Web Developer",
    company: "FatMac Technologies",
    period: "2023 – 2024",
    desc: "Managed client projects, adapted to new technologies, mentored junior developers, and contributed to HR, Employee Self-Service, and Innovation platforms.",
  },
];

const skills = [
  "React", "HTML", "CSS", "JavaScript",
  "Material UI", "Canva", "Figma"
];

const education = [
  {
    degree: "M.Sc. Software Systems",
    school: "PSG College of Arts and Science",
    year: "2018",
    detail: "Distinction · GPA 8.9 / 10.0",
  },
  {
    degree: "Web Design Certification",
    school: "PSG College of Arts and Science",
    year: "2020",
  },
  {
    degree: "Consumer Psychology Certification",
    school: "NPTEL",
    year: "2020",
  },
  {
    degree: "User-Centric Computing for Human-Computer Interaction",
    school: "NPTEL",
    year: "2020",
  },
];

const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Tamil", proficiency: "Fluent" },
  { name: "Telugu", proficiency: "Intermediate" },
  { name: "Hindi", proficiency: "Intermediate" },
  { name: "French", proficiency: "Basics" },
];

const achievements = [
  {
    title: "Academic Excellence - Rank Holder",
    description: "Awarded as the rank holder for II semester in 2019",
  },
  {
    title: "Consistent High Performer",
    description: "Awarded as the rank holder for III semester in 2019",
  },
  {
    title: "Ranked II in Batch",
    description: "Ranked II in my batch",
  },
  {
    title: "Academic Excellence",
    description: "Graduated with First Class with Distinction (89%) in M.Sc. Software Systems, 2023",
  },
  {
    title: "Mentorship & Leadership",
    description: "Mentored junior developers, ensuring smooth project execution",
  },
];

export default function AboutModal({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  /* Auto-rotate achievements carousel */
  useEffect(() => {
    if (open) {
      autoRotateIntervalRef.current = setInterval(() => {
        setCurrentAchievementIndex((prev) => (prev + 1) % achievements.length);
      }, 4000);
    }
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [open]);

  /* Stop auto-rotation on manual selection */
  const handleDotClick = (idx: number) => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
    setCurrentAchievementIndex(idx);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="About me"
        className={`fixed right-0 top-0 h-full w-full sm:w-[30rem] bg-[#001b2e] border-l border-[#294c60]/60 z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sticky header */}
        <div className="sticky top-0 bg-[#001b2e]/96 backdrop-blur-sm border-b border-[#294c60]/60 flex items-center justify-between px-5 py-4">
          <span className="text-[#ffc49b] font-mono font-bold text-base">About Me</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#adb6c4] hover:text-[#ffefd3] hover:bg-[#294c60]/60 transition-all cursor-pointer"
            aria-label="Close panel"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-6 space-y-8">

          {/* ── Person ── */}
          <section className="flex items-start gap-4">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#294c60] border-2 border-[#ffc49b]/60 flex items-center justify-center text-[#ffc49b] font-bold text-xl font-mono select-none">
              IK
            </div>
            <div>
              <h3 className="text-[#ffefd3] text-xl font-bold leading-tight">Iksita B</h3>
              <p className="text-[#ffc49b] text-sm font-medium mt-0.5">Front End Developer</p>
              <p className="text-[#adb6c4] text-xs mt-0.5">📍 Coimbatore, Tamil Nadu, India</p>
              <p className="text-[#adb6c4] text-sm mt-2.5 leading-relaxed">
                Front-End Developer with 3+ years of experience in React.js, scalable UI architecture, and performance optimization. Delivered web applications for global clients including Perkins&Will, Sidara, and Skewb, translating business requirements into intuitive and maintainable solutions.
              </p>
            </div>
          </section>

          {/* ── Experience ── */}
          <section>
            <SectionTitle icon={<BriefcaseIcon />}>Experience</SectionTitle>
            <div className="space-y-4 mt-4">
              {experience.map((exp, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#294c60] hover:border-[#ffc49b]/50 transition-colors duration-200">
                  <p className="text-[#ffefd3] font-semibold text-sm">{exp.role}</p>
                  <p className="text-[#ffc49b] text-xs mt-0.5">{exp.company} · {exp.period}</p>
                  <p className="text-[#adb6c4] text-xs mt-1.5 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Specialty ── */}
          <section>
            <SectionTitle icon={<SparkleIcon />}>Specialty &amp; Skills</SectionTitle>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-[#294c60]/50 text-[#ffefd3] border border-[#294c60] rounded-full hover:border-[#ffc49b]/50 hover:text-[#ffc49b] transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section>
            <SectionTitle icon={<GraduationIcon />}>Education</SectionTitle>
            <div className="space-y-3 mt-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-[#294c60]/20 border border-[#294c60]/60 rounded-xl p-3.5 hover:border-[#ffc49b]/30 transition-colors duration-200"
                >
                  <p className="text-[#ffefd3] font-semibold text-sm">{edu.degree}</p>
                  <p className="text-[#adb6c4] text-xs mt-0.5">{edu.school}</p>
                  <p className="text-[#ffc49b] text-xs mt-1">
                    {edu.year}
                    {edu.detail && ` · ${edu.detail}`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Languages ── */}
          <section>
            <SectionTitle icon={<LanguageIcon />}>Languages</SectionTitle>
            <div className="grid grid-cols-2 gap-2.5 mt-4">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="bg-[#294c60]/20 border border-[#294c60]/60 rounded-lg p-3 hover:border-[#ffc49b]/30 transition-colors duration-200"
                >
                  <p className="text-[#ffefd3] font-semibold text-xs">{lang.name}</p>
                  <p className="text-[#ffc49b] text-xs mt-1.5">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Achievements Carousel ── */}
          <section>
            <SectionTitle icon={<TrophyIcon />}>Achievements</SectionTitle>
            <div className="mt-4 relative">
              {/* Carousel */}
              <div className="bg-[#294c60]/20 border border-[#294c60]/60 rounded-xl p-4 relative overflow-hidden">
                <div className="transition-opacity duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#ffc49b]/20 border border-[#ffc49b]/50">
                        <span className="text-[#ffc49b] text-sm font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#ffefd3] font-semibold text-sm leading-snug">
                        {achievements[currentAchievementIndex].title}
                      </h4>
                      <p className="text-[#adb6c4] text-xs mt-1.5 leading-relaxed">
                        {achievements[currentAchievementIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  {achievements.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === currentAchievementIndex
                          ? "w-6 bg-[#ffc49b]"
                          : "w-1.5 bg-[#294c60]/60 hover:bg-[#ffc49b]/50"
                      }`}
                      aria-label={`Go to achievement ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Resume ── */}
          <section>
            <a
              href="/iksita-b-react-developer-resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#ffc49b] text-[#001b2e] text-sm font-bold rounded-xl hover:bg-[#ffefd3] active:scale-[0.98] transition-all duration-200"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </section>

          {/* ── Contact ── */}
          <section>
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="space-y-3 mt-4">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#294c60]/20 border border-[#294c60]/60 rounded-xl hover:border-[#25D366]/50 hover:bg-[#294c60]/40 transition-all duration-200 group"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                  <WhatsAppIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-[#ffefd3] text-sm font-medium">WhatsApp</p>
                  <p className="text-[#adb6c4] text-xs truncate">Chat with me</p>
                </div>
                <ChevronRight className="ml-auto text-[#adb6c4] group-hover:text-[#25D366]" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-3 p-3 bg-[#294c60]/20 border border-[#294c60]/60 rounded-xl hover:border-[#ffc49b]/50 hover:bg-[#294c60]/40 transition-all duration-200 group"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#ffc49b]/15 text-[#ffc49b]">
                  <PhoneIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-[#ffefd3] text-sm font-medium">Phone</p>
                  <p className="text-[#adb6c4] text-xs truncate">{PHONE}</p>
                </div>
                <ChevronRight className="ml-auto text-[#adb6c4] group-hover:text-[#ffc49b]" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 p-3 bg-[#294c60]/20 border border-[#294c60]/60 rounded-xl hover:border-[#ffc49b]/50 hover:bg-[#294c60]/40 transition-all duration-200 group"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#ffc49b]/15 text-[#ffc49b]">
                  <EmailIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-[#ffefd3] text-sm font-medium">Email</p>
                  <p className="text-[#adb6c4] text-xs truncate">{EMAIL}</p>
                </div>
                <ChevronRight className="ml-auto text-[#adb6c4] group-hover:text-[#ffc49b]" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

/* ── Small reusable helpers ── */

function SectionTitle({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-[#ffc49b] font-semibold text-xs uppercase tracking-widest">
      {icon}
      {children}
    </h4>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 8.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012.68 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 shrink-0 transition-colors duration-200 ${className}`}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
