import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero / Banner Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white mb-12">
        <Image src="/about-banner.jpg" alt="About Us Banner" fill className="object-cover opacity-60" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">About Us</h1>
          <p className="text-xl mb-4">Empowering businesses with innovative IT solutions</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold mb-2">Company Overview</h2>
        <p className="mb-2">SoftNovaIT was founded in 2022 with a vision to transform businesses through technology. Over the years, we have grown into a trusted IT partner for clients worldwide, delivering solutions that drive success and innovation.</p>
        <ul className="list-disc list-inside mb-2">
          <li>Founded: 2022</li>
          <li>Core Focus: Software, Web, Mobile, Cloud, AI/ML, and IT Solutions</li>
        </ul>
        <p>Our journey is marked by continuous growth, a passion for excellence, and a commitment to our clients&apos; success.</p>
      </section>

      {/* Mission, Vision & Values */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">Mission, Vision & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Mission</h3>
            <p>Deliver innovative IT solutions that empower businesses to thrive in the digital era.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Vision</h3>
            <p>To be a global leader in technology, driving transformation and growth for our clients.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Values</h3>
            <ul className="list-disc list-inside">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Excellence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Team / Leadership */}
      <section className="max-w-6xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example team members, replace with real data */}
          <div className="flex flex-col items-center">
            <Image src="/team1.jpg" alt="Jane Doe" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Jane Doe</h3>
            <p>CEO</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team2.jpg" alt="John Smith" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">John Smith</h3>
            <p>Lead Developer</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team3.jpg" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Alice Lee</h3>
            <p>UI/UX Designer</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Achievements */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">Milestones & Achievements</h2>
        <ul className="list-disc list-inside">
          <li>2022: Company founded</li>
          <li>2023: Launched first enterprise software product</li>
          <li>2024: Recognized as a top IT solutions provider</li>
          <li>2025: Expanded to serve clients in 10+ countries</li>
        </ul>
      </section>

      {/* Call-to-Action / Contact Info */}
      <section className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to work with us?</h2>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
      </section>
    </main>
  );
}
