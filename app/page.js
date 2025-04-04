
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">MasXort INC</h1>
      <p className="text-xl mb-6">Built on Simplicity. Engineered to Evolve.</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cloud Infrastructure & Hybrid Environments</li>
          <li>IT Operations & Monitoring Solutions</li>
          <li>Cybersecurity and Zero Trust Architecture</li>
          <li>Office 365 & Exchange Management</li>
          <li>Nutanix & VMware Virtualization</li>
          <li>iSCSI SAN, NAS, and Storage Solutions</li>
          <li>Automation & DevOps with Terraform and CI/CD</li>
        </ul>
      </div>
      <footer className="mt-10 text-center text-sm">
        <p>Contact: rmas@masxort.com | 305-764-0077</p>
        <p className="text-gray-400 mt-2">Built with ❤️ by MiAngel AI and Rafael Mas</p>
      </footer>
    </main>
  );
}
