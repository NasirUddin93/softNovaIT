
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { LinkedinIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";
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
        {/* Global Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* SoftNovaIT */}
            <div>
              <h3 className="text-xl font-bold mb-4">SoftNovaIT</h3>
              <p className="text-gray-300 text-sm mb-4">Empowering Your Business with IT Innovation. We deliver web, software, AI, and integrated IT solutions for your digital success.</p>
              <div className="flex gap-3 mt-2">
                <a href="https://www.linkedin.com/in/softnovait/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400"><LinkedinIcon className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/SoftNovaIT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400"><FacebookIcon className="w-5 h-5" /></a>
                <a href="https://x.com/SoftNovaIT" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400"><TwitterIcon className="w-5 h-5" /></a>
                <a href="https://www.youtube.com/@softnovait" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-blue-400"><YoutubeIcon className="w-5 h-5" /></a>
              </div>
            </div>
            {/* Pages */}
            <div>
              <h3 className="text-xl font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><span className="font-semibold">Address:</span> House-30, Road-11, Sector-10, Uttara, Dhaka-1230</li>
                <li><span className="font-semibold">Email:</span> <a href="mailto:info@softnovait.com" className="hover:underline">info@softnovait.com</a></li>
                <li><span className="font-semibold">Phone:</span> <a href="tel:01707568468" className="hover:underline">01707568468</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-8">&copy; {new Date().getFullYear()} SoftNovaIT. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
