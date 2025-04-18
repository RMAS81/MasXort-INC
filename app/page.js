import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <header className="w-full max-w-5xl flex justify-between items-center mb-16">
        <img src="/logo.png" alt="MasXort Logo" className="h-40" />
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>

      <main className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Built on <span className="text-blue-500">Simplicity</span>.<br />
          Engineered to <span className="text-blue-500">Evolve</span>.
        </h2>
        <p className="text-lg text-gray-400 mb-10">Future Starts Here</p>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">🚀 Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Managed IT Services',
                desc: 'Comprehensive account management.',
                icon: '🛠️'
              },
              {
                title: 'Cloud Solutions',
                desc: 'Flexible and scalable cloud infrastructure.',
                icon: '☁️'
              },
              {
                title: 'Cybersecurity',
                desc: 'Protection from modern threats.',
                icon: '🛡️'
              },
              {
                title: 'Network Management',
                desc: 'Expertise in LAN, WAN, and wireless.',
                icon: '🌐'
              },
              {
                title: 'IT Consulting',
                desc: 'Strategic guidance for digital growth.',
                icon: '💼'
              },
              {
                title: 'Data Protection',
                desc: 'Backup, disaster recovery, and compliance.',
                icon: '🔒'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#111827] p-6 rounded-xl border border-gray-700 text-left shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-sm text-gray-500 mt-16">
          Built with ❤️ by MiAngel-AI and Rafael Mas
        </footer>
      </main>
    </div>
  );
}
