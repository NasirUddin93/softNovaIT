import React from "react";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Featured Post Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src="/featured-post.jpg"
          alt="Featured Post"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured: How AI is Transforming IT</h2>
          <p className="mb-4 text-gray-700">
            Discover the latest trends in artificial intelligence and how they&apos;re shaping the future of IT services.
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read More &rarr;</a>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        {/* Blog Posts / Articles Listing */}
        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Latest Articles</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((post) => (
              <article key={post} className="bg-white rounded-lg shadow p-4 flex flex-col">
                <img
                  src={`/post-${post}.jpg`}
                  alt="Post"
                  className="rounded mb-3 h-40 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Blog Post Title {post}</h3>
                <p className="text-gray-600 mb-2">
                  Short excerpt for the blog post goes here. It gives a quick summary of the content.
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>By Author Name</span>
                  <span className="mx-2">•</span>
                  <span>Aug 18, 2025</span>
                </div>
                <a href="#" className="text-blue-600 mt-auto font-semibold">Read More</a>
              </article>
            ))}
          </div>
          {/* Pagination / Load More */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Load More
            </button>
          </div>
        </section>

        {/* Sidebar / Widgets */}
        <aside className="w-full md:w-64 space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-blue-600">Tech</a></li>
              <li><a href="#" className="hover:text-blue-600">Company</a></li>
              <li><a href="#" className="hover:text-blue-600">Industry</a></li>
              <li><a href="#" className="hover:text-blue-600">Tips</a></li>
            </ul>
          </div>
          {/* Popular Posts */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold mb-2">Popular Posts</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">How AI is Transforming IT</a></li>
              <li><a href="#" className="hover:text-blue-600">5 Tips for Remote Teams</a></li>
              <li><a href="#" className="hover:text-blue-600">Cloud Security Best Practices</a></li>
            </ul>
          </div>
          {/* Newsletter Signup */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold mb-2">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="border rounded px-2 py-1 text-sm"
              />
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Subscribe
              </button>
            </form>
          </div>
          {/* Social Links */}
          <div className="bg-white rounded-lg shadow p-4 flex space-x-4 justify-center">
            <a href="#" aria-label="Twitter" className="hover:text-blue-600">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">💼</a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">📘</a>
          </div>
        </aside>
      </main>

      {/* Call-to-Action (CTA) Section */}
      <section className="bg-blue-600 py-8 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest updates, guides, and resources.</p>
          <form className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-3 py-2 text-black"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
