import React from "react";

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team at SoftNovaIT</h1>
        <p className="text-lg text-gray-700 mb-6">
          Build your career with us. We’re looking for passionate, creative, and driven people to join our growing IT family.
        </p>
        <a
          href="#open-positions"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold"
        >
          View Open Positions
        </a>
      </section>

      {/* Life at Company / Culture */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Life at SoftNovaIT</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-600">Work with talented people in a supportive, innovative environment.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Growth & Learning</h3>
            <p className="text-gray-600">Access to training, mentorship, and opportunities to advance your skills.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-600">Flexible schedules and remote options to help you thrive inside and outside work.</p>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Benefits & Perks</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <span className="text-3xl mb-2 block">💼</span>
            <p className="font-semibold">Competitive Salary</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <span className="text-3xl mb-2 block">🏥</span>
            <p className="font-semibold">Health Insurance</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <span className="text-3xl mb-2 block">🏠</span>
            <p className="font-semibold">Remote Work</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <span className="text-3xl mb-2 block">📚</span>
            <p className="font-semibold">Learning Budget</p>
          </div>
        </div>
      </section>

      {/* Open Positions / Job Listings */}
      <section id="open-positions" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          {/* Example Job Listing */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
              <p className="text-gray-600 mb-2">Remote | Full-time</p>
              <p className="text-gray-700">Work with React and modern web technologies to build amazing user experiences.</p>
            </div>
            <a
              href="#apply"
              className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded font-semibold"
            >
              Apply Now
            </a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-1">Backend Developer</h3>
              <p className="text-gray-600 mb-2">Remote | Full-time</p>
              <p className="text-gray-700">Help us scale our backend systems using Laravel and Node.js.</p>
            </div>
            <a
              href="#apply"
              className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded font-semibold"
            >
              Apply Now
            </a>
          </div>
          {/* Add more job listings as needed */}
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Hiring Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Submit your application online.</li>
          <li>Initial HR screening call.</li>
          <li>Technical interview and assessment.</li>
          <li>Final interview with the team.</li>
          <li>Offer and onboarding!</li>
        </ol>
      </section>

      {/* Employee Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Team Says</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="italic mb-2">
              “SoftNovaIT has given me the opportunity to grow and learn every day. The team is supportive and the projects are exciting!”
            </p>
            <p className="font-semibold text-blue-600">— Alex, Frontend Developer</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="italic mb-2">
              “I love the flexibility and the culture here. Everyone’s ideas are valued and there’s always room for innovation.”
            </p>
            <p className="font-semibold text-blue-600">— Priya, Backend Engineer</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Careers FAQ</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Can I work remotely?</h4>
            <p className="text-gray-600">Yes! Most of our positions are remote-friendly.</p>
          </div>
          <div>
            <h4 className="font-semibold">Do you offer internships?</h4>
            <p className="text-gray-600">We offer internships throughout the year. Check our open positions for current opportunities.</p>
          </div>
          <div>
            <h4 className="font-semibold">What is the interview process like?</h4>
            <p className="text-gray-600">Our process includes an application review, HR call, technical interview, and a final team interview.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Application Form */}
      <section id="apply" className="bg-blue-600 py-12">
        <div className="max-w-2xl mx-auto text-center text-white px-4">
          <h2 className="text-2xl font-bold mb-2">Ready to Apply?</h2>
          <p className="mb-4">Send us your resume and join our amazing team!</p>
          <form className="flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded px-3 py-2 text-black w-full max-w-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded px-3 py-2 text-black w-full max-w-md"
              required
            />
            <input
              type="file"
              className="rounded px-3 py-2 text-black w-full max-w-md bg-white"
              required
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold mt-2">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
