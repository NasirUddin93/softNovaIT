export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4" method="POST" action="#">
        <input type="text" name="name" placeholder="Your Name" className="w-full border rounded px-3 py-2" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" required />
        <textarea name="message" placeholder="Your Message" className="w-full border rounded px-3 py-2" rows={5} required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
      </form>
    </main>
  );
}
