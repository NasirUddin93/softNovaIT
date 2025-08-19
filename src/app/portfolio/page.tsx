
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "Web application for e-commerce.",
    image: "/project1.jpg",
    category: "Web Development",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Mobile app for logistics management.",
    image: "/project2.jpg",
    category: "Mobile Apps",
    link: "#",
  },
  {
    title: "Project Three",
    description: "AI-powered analytics dashboard.",
    image: "/project3.jpg",
    category: "AI Solutions",
    link: "#",
  },
];

const categories = ["All", "Web Development", "AI Solutions", "Mobile Apps"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Hero / Banner Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white mb-12">
        <Image src="/portfolio-banner.jpg" alt="Portfolio Banner" fill className="object-cover opacity-60" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Our Portfolio</h1>
          <p className="text-xl mb-4">Delivering innovative IT solutions across industries</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
        </div>
      </section>

      {/* Project Categories / Filters (optional, static for now) */}
      <section className="max-w-4xl mx-auto mb-8 px-4 text-center">
        <div className="inline-flex gap-4 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid / Projects Gallery */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No projects found.</div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-4 shadow flex flex-col">
                <Image src={project.image} alt={project.title} width={400} height={200} className="mb-2 rounded" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <Link href={project.link} className="text-blue-600 underline">View Details</Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Featured Project Section (optional) */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">Featured Project</h2>
        <div className="bg-gray-50 p-6 rounded shadow flex flex-col md:flex-row gap-8 items-center">
          <Image src="/project1.jpg" alt="Featured Project" width={300} height={180} className="rounded mb-4 md:mb-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform for Retailer X</h3>
            <p className="mb-2"><strong>Problem:</strong> Client needed a scalable online store with real-time inventory and payment integration.</p>
            <p className="mb-2"><strong>Solution:</strong> Developed a custom web app with secure checkout, admin dashboard, and analytics.</p>
            <p className="mb-2"><strong>Technologies:</strong> Next.js, Node.js, Stripe, AWS</p>
            <p className="italic">“SoftNovaIT delivered our project on time and exceeded expectations!” – Client A</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Contact Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have a project in mind?</h2>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
      </section>
    </main>
  );
}
