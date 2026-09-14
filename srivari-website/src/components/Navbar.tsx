"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Equipments", href: "/equipments" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 ${
          scrolled || !isHome
            ? "border-gray-100 bg-[#C41E3A]"
            : "border-white/20 bg-[#C41E3A]/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-white text-xs">
          <span>No. 163, Dhandapani Apartments, Ponnagar, 9th Cross, Trichi - 620 001</span>
          <div className="flex items-center gap-4">
            <a href="tel:+919003080565" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <Phone size={12} />
              +91 90030 80565
            </a>
            <span>|</span>
            <a href="mailto:srivariconstructions75@gmail.com" className="hover:text-white/80 transition-colors">
              srivariconstructions75@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-10 w-32 lg:h-12 lg:w-40">
              <Image
                src="/logo.png"
                alt="Srivari Constructions"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 relative group ${
                    active
                      ? "text-[#C41E3A]"
                      : scrolled || !isHome
                      ? "text-gray-700 hover:text-[#C41E3A]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-[#C41E3A] rounded-full transition-all duration-200 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className="bg-[#C41E3A] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#9B1530] transition-all duration-200 hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHome ? "text-gray-700" : "text-white"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-white shadow-xl`}
      >
        <div className="max-w-7xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                  active
                    ? "bg-[#C41E3A] text-white"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#C41E3A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/contact"
            className="mt-2 bg-[#C41E3A] text-white px-4 py-3 rounded-md text-sm font-semibold text-center hover:bg-[#9B1530] transition-colors"
          >
            Get a Quote
          </a>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <a href="tel:+919003080565" className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={14} className="text-[#C41E3A]" />
              +91 90030 80565
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
