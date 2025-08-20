
import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* 1️⃣ Hero / Banner Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white mb-16">
        <Image src="/home-banner.jpg" alt="Hero Banner" fill className="object-cover opacity-60" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Empowering Your Business with IT Innovation</h1>
          <p className="text-xl mb-6">SoftNovaIT – Your Partner in Digital Transformation</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Get Started</Link>
        </div>
      </section>

      {/* 2️⃣ About Us Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-2">About Us</h2>
        <p className="mb-2 text-justify">SoftNovaIT is a forward-thinking IT company specializing in innovative solutions for businesses of all sizes.SoftNovaIT is a forward-thinking IT company dedicated to delivering innovative and reliable technology solutions for businesses of all sizes. We specialize in web development, software solutions, AI-powered tools, and integrated IT services, helping organizations streamline operations, enhance productivity, and achieve their digital goals. Our commitment to quality, creativity, and client satisfaction drives everything we do.</p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1">
            <h3 className="font-bold">Mission</h3>
            <p>Deliver innovative IT solutions that empower businesses to thrive in the digital era.</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold">Vision</h3>
            <p>To be a global leader in technology, driving transformation and growth for our clients.</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold">Values</h3>
            <p>Innovation, Integrity, Excellence, Collaboration.</p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Services Section */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
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

      {/* 4️⃣ Portfolio / Projects Section */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Portfolio</h2>
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

      {/* 5️⃣ Team Section */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example team members, replace with real data */}
          <div className="flex flex-col items-center">
            <Image src="/team_member_04.png" alt="Jane Doe" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Animesh Kumar Paul</h3>
            <p>Executive Member</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_05.png" alt="John Smith" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Md. Anwar Hiron</h3>
            <p>Server Specialist</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_07.jpg" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">MD TAREK AHAMED</h3>
            <p>Network Specialist</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_07.png" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Md. Azizul Haque</h3>
            <p>Database Specialist</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_01.jpg" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Nasir Uddin</h3>
            <p>Software Engineer</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_02.png" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Ashraful Islam Emad</h3>
            <p>Senior Web Developer</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/team_member_03.png" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Syed Mominul Islam</h3>
            <p>Web Developer</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/team_member_06.png" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h3 className="text-lg font-semibold">Md. Azizul Haque</h3>
            <p>Marketing Executive</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>

      {/* 6️⃣ Testimonials / Clients Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded shadow">
            <p className="italic mb-2">“SoftNovaIT delivered our project on time and exceeded expectations!”</p>
            <span className="font-semibold">– Client A</span>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <p className="italic mb-2">“Professional team and excellent support throughout.”</p>
            <span className="font-semibold">– Client B</span>
          </div>
        </div>
        {/* Add client logos here if desired */}
      </section>

      {/* 7️⃣ Blog / News Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example blog posts, replace with real data */}
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">How AI is Transforming Business</h3>
            <p className="mb-2">Discover the latest trends in artificial intelligence and how they impact your business.</p>
            <Link href="/blog" className="text-blue-600 underline">Read more</Link>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">5 Tips for Secure Networking</h3>
            <p className="mb-2">Best practices for keeping your business network safe and reliable.</p>
            <Link href="/blog" className="text-blue-600 underline">Read more</Link>
          </div>
        </div>
      </section>

      {/* 8️⃣ Call-to-Action Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to start your project?</h2>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">Contact Us</Link>
      </section>

      {/* 9️⃣ Contact Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="font-bold mb-2">Address</h3>
            <p>House-30, Road-11, Sector-10, Uttara, Dhaka-1230</p>
            <h3 className="font-bold mt-4 mb-2">Email</h3>
            <p>info@softnovait.com</p>
            <h3 className="font-bold mt-4 mb-2">Phone</h3>
            <p>01707568468</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/softnovait/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/SoftNovaIT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://x.com/SoftNovaIT" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-600 hover:text-blue-800 transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@softnovait" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-blue-600 hover:text-blue-800 transition-colors">
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <form className="space-y-4 bg-gray-50 p-6 rounded shadow" method="POST" action="#">
              <input type="text" name="name" placeholder="Your Name" className="w-full border rounded px-3 py-2" required />
              <input type="email" name="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" required />
              <textarea name="message" placeholder="Your Message" className="w-full border rounded px-3 py-2" rows={5} required />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </section>

  </main>
 );
}
