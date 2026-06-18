"use client";

import { useState } from "react";
import AboutModal from "./AboutModal";

const WHATSAPP = "1234567890"; // digits only
const PHONE    = "+1 234 567 890";
const EMAIL    = "hello@alexrivera.dev";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-30 bg-[#001b2e]/95 backdrop-blur-md border-b border-[#294c60]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">

          {/* ── Logo ── */}
          <a
            href="/"
            className="text-[#ffc49b] font-bold text-lg sm:text-xl font-mono tracking-tight hover:text-[#ffefd3] transition-colors shrink-0"
          >
            &lt;IK /&gt;
          </a>

          {/* ── Actions ── */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* About */}
            <button
              onClick={() => setAboutOpen(true)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#294c60] text-[#ffefd3] rounded-lg text-sm font-medium hover:bg-[#ffc49b] hover:text-[#001b2e] transition-all duration-200 cursor-pointer"
            >
              About
            </button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[#294c60] mx-0.5" />

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-[#294c60]/60 text-[#adb6c4] hover:text-[#25D366] hover:bg-[#294c60] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              aria-label="Call me"
              title="Call"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-[#294c60]/60 text-[#adb6c4] hover:text-[#ffc49b] hover:bg-[#294c60] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 8.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012.68 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email me"
              title="Email"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-[#294c60]/60 text-[#adb6c4] hover:text-[#ffc49b] hover:bg-[#294c60] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}
