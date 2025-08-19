import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="bg-white">
      {/* Leadership / Core Team */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Leadership & Core Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example team members, replace with real data */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded shadow">
            <Image src="/team1.jpg" alt="Jane Doe" width={96} height={96} className="rounded-full mb-2" />
            <h2 className="text-lg font-semibold">Jane Doe</h2>
            <p className="text-blue-700 font-medium">CEO</p>
            <p className="text-sm text-gray-600 mb-2 text-center">Visionary leader with 15+ years in IT and business strategy.</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded shadow">
            <Image src="/team2.jpg" alt="John Smith" width={96} height={96} className="rounded-full mb-2" />
            <h2 className="text-lg font-semibold">John Smith</h2>
            <p className="text-blue-700 font-medium">CTO</p>
            <p className="text-sm text-gray-600 mb-2 text-center">Tech innovator and architect, leading our development teams.</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded shadow">
            <Image src="/team3.jpg" alt="Alice Lee" width={96} height={96} className="rounded-full mb-2" />
            <h2 className="text-lg font-semibold">Alice Lee</h2>
            <p className="text-blue-700 font-medium">Project Manager</p>
            <p className="text-sm text-gray-600 mb-2 text-center">Expert in agile delivery and client success management.</p>
            <div className="flex gap-2 mt-1">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview / Departments (optional) */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">💻</span>
            <h3 className="font-bold">Development</h3>
            <p className="text-center text-sm text-gray-600">Building robust software, web, and mobile solutions.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🎨</span>
            <h3 className="font-bold">Design</h3>
            <p className="text-center text-sm text-gray-600">Crafting user experiences and beautiful interfaces.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">📈</span>
            <h3 className="font-bold">Marketing</h3>
            <p className="text-center text-sm text-gray-600">Promoting our brand and client projects worldwide.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Careers */}
      <section className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to join our team?</h2>
        <Link href="/careers" className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold shadow hover:bg-blue-700">View Careers</Link>
      </section>
    </main>
  );
}
