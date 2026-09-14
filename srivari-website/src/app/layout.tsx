import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srivari Constructions | Building Excellence in Trichy",
  description:
    "Srivari Constructions - Premium construction services in Trichy. Specializing in Residential, Commercial, Interior Works, Renovation, Civil Engineering, and Project Management.",
  keywords:
    "construction, Trichy, Srivari, residential construction, commercial construction, civil engineering, renovation, interior works",
  authors: [{ name: "Srivari Constructions" }],
  openGraph: {
    title: "Srivari Constructions | Building Excellence",
    description: "Premium construction services in Trichy, Tamil Nadu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
