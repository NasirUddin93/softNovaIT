
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="text-2xl font-bold text-blue-700">SoftNovaIT</Link>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              aria-label="Toggle navigation menu"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-all ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-all ${navOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-blue-700 transition-all ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            <div className="hidden md:flex space-x-6 text-base font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
              <Link href="/team" className="hover:text-blue-600">Team</Link>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <Link href="/careers" className="hover:text-blue-600">Careers</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Contact</Link>
            </div>
          </div>
          {/* Mobile menu */}
          {navOpen && (
            <div className="md:hidden bg-white border-t shadow-sm px-4 py-4 flex flex-col space-y-4 text-base font-medium">
              <Link href="/about" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>About</Link>
              <Link href="/services" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Services</Link>
              <Link href="/portfolio" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Portfolio</Link>
              <Link href="/team" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Team</Link>
              <Link href="/blog" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Blog</Link>
              <Link href="/careers" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Careers</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" onClick={() => setNavOpen(false)}>Contact</Link>
            </div>
          )}
        </nav>
        {children}
        <footer className="w-full bg-gray-100 border-t mt-12 py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
            <span>&copy; 2025 SoftNovaIT. All rights reserved.</span>
            <span>
              Built with <a href="https://nextjs.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Next.js</a> &amp; <a href="https://tailwindcss.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
