import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      {/* Hero / Banner Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mb-12">
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Web Development</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">AI Solutions</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Mobile Apps</button>
        </div>
      </section>

      {/* Portfolio Grid / Projects Gallery */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project cards, replace with real data */}
          <div className="bg-white border rounded-lg p-4 shadow flex flex-col">
            <Image src="/project1.jpg" alt="Project 1" width={400} height={200} className="mb-2 rounded" />
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="mb-2">Web application for e-commerce.</p>
            <Link href="#" className="text-blue-600 underline">View Details</Link>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow flex flex-col">
            <Image src="/project2.jpg" alt="Project 2" width={400} height={200} className="mb-2 rounded" />
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="mb-2">Mobile app for logistics management.</p>
            <Link href="#" className="text-blue-600 underline">View Details</Link>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow flex flex-col">
            <Image src="/project3.jpg" alt="Project 3" width={400} height={200} className="mb-2 rounded" />
            <h3 className="text-xl font-semibold">Project Three</h3>
            <p className="mb-2">AI-powered analytics dashboard.</p>
            <Link href="#" className="text-blue-600 underline">View Details</Link>
          </div>
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
