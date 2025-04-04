import Link from 'next/link'; // Import Link component

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <header className="w-full max-w-5xl flex justify-between items-center mb-16">
        <img src="/logo.png" alt="MasXort Logo" className="h-40" />
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </header>

      <main className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Story</h1>
        <p className="text-lg text-gray-400 mb-6">
          At MasXort INC, we believe in the power of simplicity and the relentless pursuit of evolution. Born from the mind of Rafael Mas, a visionary leader who turned his passion for technology and innovation into a thriving business, MasXort was created to bridge the gap between complex IT challenges and seamless, efficient solutions.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Rafael, an immigrant who learned to adapt, grow, and flourish in the ever-changing tech landscape, built MasXort with a clear mission: To simplify the world of IT, empowering businesses to scale effortlessly and evolve continuously. With years of experience managing complex IT infrastructure, cybersecurity, and network solutions, Rafael realized that many organizations were facing the same struggles — trying to stay ahead of the curve in an increasingly digital world.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          MasXort started as a small consulting firm, but as the demand for cutting-edge solutions grew, so did the company. Today, MasXort is more than just a service provider; we are a strategic partner for businesses looking to drive growth, optimize their operations, and secure their digital futures. We specialize in providing managed IT services, cloud solutions, cybersecurity, and much more, all while ensuring that simplicity remains at the heart of everything we do.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Our story is one of passion, resilience, and a commitment to excellence. We are driven by our core values:
        </p>
        <ul className="text-lg text-gray-400 mb-6 list-disc pl-6">
          <li><strong>Innovation:</strong> Always exploring the latest technologies to keep you ahead.</li>
          <li><strong>Trust:</strong> Building long-lasting relationships based on reliability and integrity.</li>
          <li><strong>Simplicity:</strong> Delivering complex solutions in the most straightforward and accessible way possible.</li>
        </ul>
        <p className="text-lg text-gray-400 mb-10">
          MasXort is where simplicity meets evolution — together, we shape the future of technology.
        </p>
      </main>

      <footer className="text-sm text-gray-500 mt-16">
        Built with ❤️ by MiAngel-AI and Rafael Mas
      </footer>
    </div>
  );
}
