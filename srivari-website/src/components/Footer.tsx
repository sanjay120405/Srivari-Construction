import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Equipments", href: "/equipments" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Works",
  "Renovation",
  "Civil Engineering",
  "Project Management",
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="relative h-14 w-44 mb-5">
              <Image
                src="/logo.png"
                alt="Srivari Constructions"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Building dreams into reality with quality, precision, and trust.
              Srivari Constructions delivers excellence across every project in Trichy and beyond.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#C41E3A] hover:bg-[#C41E3A] transition-all duration-200 group"
                >
                  <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#C41E3A] inline-block" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#C41E3A] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={13} className="text-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#C41E3A] inline-block" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-[#C41E3A] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={13} className="text-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#C41E3A] inline-block" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#C41E3A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  No. 163, Dhandapani Apartments,<br />
                  Ponnagar, 9th Cross,<br />
                  Trichi – 620 001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#C41E3A] flex-shrink-0" />
                <a href="tel:+919003080565" className="text-sm text-gray-400 hover:text-[#C41E3A] transition-colors">
                  +91 90030 80565
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#C41E3A] flex-shrink-0" />
                <a href="mailto:srivariconstructions75@gmail.com" className="text-sm text-gray-400 hover:text-[#C41E3A] transition-colors break-all">
                  srivariconstructions75@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="text-[#C41E3A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Mon – Sat: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Srivari Constructions. All rights reserved.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-4 flex justify-center sm:justify-start text-xs text-gray-500">
          <p>
            Made by{" "}
            <a
              href="https://www.mahaantech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-300 hover:text-[#C41E3A] transition-colors"
            >
              Mahaan Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
