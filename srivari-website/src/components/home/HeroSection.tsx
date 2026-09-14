"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    headline: "Building Your Vision Into Reality",
    sub: "Premium construction services with unmatched quality, precision and trust across Trichy and Tamil Nadu.",
  },
  {
    headline: "Excellence in Every Structure",
    sub: "From residential homes to commercial complexes — we deliver projects on time and within budget.",
  },
  {
    headline: "15+ Years of Trusted Construction",
    sub: "A legacy of craftsmanship, modern techniques, and dedicated project management.",
  },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[idx];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Srivari Constructions — construction site"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/60 to-[#C41E3A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#C41E3A]/20 border border-[#C41E3A]/50 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse" />
            Srivari Constructions — Trichy
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {slide.headline.split(" ").map((word, i) =>
              i === 0 ? (
                <span key={i} className="text-[#C41E3A]">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-10 transition-all duration-500 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {slide.sub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C41E3A] text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-[#9B1530] transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5 group"
            >
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919003080565"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-white hover:text-[#C41E3A] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              +91 90030 80565
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true); }, 400); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-[#C41E3A]" : "w-4 bg-white/40 hover:bg-white/60"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-[#C41E3A]" />
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:grid grid-cols-4 bg-[#C41E3A] divide-x divide-red-700">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "₹500Cr+", label: "Worth of Projects" },
              { value: "100+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-4 text-center text-white">
                <div className="text-2xl font-extrabold">{stat.value}</div>
                <div className="text-xs text-red-200 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
