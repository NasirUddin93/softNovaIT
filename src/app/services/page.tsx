import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero / Banner Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-blue-900 text-white mb-12">
        <Image src="/services-banner.jpg" alt="Our Services Banner" fill className="object-cover opacity-60" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Our Services</h1>
          <p className="text-xl mb-4">Innovative IT solutions for your business</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
        </div>
      </section>

      {/* Services Overview / Summary */}
      <section className="max-w-4xl mx-auto mb-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">What We Offer</h2>
        <p className="mb-2">SoftNovaIT delivers a full spectrum of IT services, from custom software and web development to AI, networking, and security solutions. Our expert team combines innovation, experience, and a client-first approach to help your business thrive in the digital age.</p>
      </section>

      {/* Individual Service Sections / Cards */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example service cards, replace icons as needed */}
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/web.svg" alt="Website Solutions" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Website Solutions</h3>
            <p className="text-center">Custom website design and development</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/software.svg" alt="Software Solutions" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Software Solutions</h3>
            <p className="text-center">Desktop, mobile apps, ERP, CRM systems</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/scan.svg" alt="Photo/Document Scanning" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Photo/Document Scanning</h3>
            <p className="text-center">Digital archiving and scanning services</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/ai.svg" alt="AI Solutions" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">AI Solutions</h3>
            <p className="text-center">Machine Learning, Computer Vision, NLP projects</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/network.svg" alt="Networking Solutions" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Networking Solutions</h3>
            <p className="text-center">LAN/WAN setup, server management, networking services</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/modem.svg" alt="Modem & Router" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Modem & Router</h3>
            <p className="text-center">Internet connectivity and network device setup</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/microcontroller.svg" alt="Embedded Systems" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Embedded Systems</h3>
            <p className="text-center">IoT projects, Arduino, Raspberry Pi development</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/ml.svg" alt="Machine Learning" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Machine Learning</h3>
            <p className="text-center">Fingerprint machines, barcode readers, computer accessory integration</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/security.svg" alt="Security Control" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Security Control</h3>
            <p className="text-center">CCTV, access control, biometric systems</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow flex flex-col items-center">
            <Image src="/icons/integrated.svg" alt="Integrated IT" width={48} height={48} />
            <h3 className="font-bold mt-4 mb-2">Integrated IT</h3>
            <p className="text-center">Hybrid services combining hardware and software</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Benefits */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why Choose SoftNovaIT?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Expert team with years of experience</li>
          <li>Innovative, tailored solutions</li>
          <li>Timely project delivery</li>
          <li>Comprehensive support & maintenance</li>
        </ul>
      </section>

      {/* Case Studies / Portfolio Highlights */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Portfolio Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example projects, replace with real data */}
          <div className="bg-white border rounded-lg p-4 shadow">
            <Image src="/project1.jpg" alt="Project 1" width={400} height={200} className="mb-2 rounded" />
            <h3 className="text-xl font-semibold">Project One</h3>
            <p>Web application for e-commerce.</p>
            <Link href="/portfolio" className="text-blue-600 underline">View details</Link>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <Image src="/project2.jpg" alt="Project 2" width={400} height={200} className="mb-2 rounded" />
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p>Mobile app for logistics management.</p>
            <Link href="/portfolio" className="text-blue-600 underline">View details</Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Contact Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to start your project?</h2>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
      </section>
    </main>
  );
}
