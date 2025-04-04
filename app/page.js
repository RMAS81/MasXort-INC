export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">🚀 Welcome to <span className="text-blue-400">MasXort INC</span></h1>
      <p className="text-lg md:text-xl text-center mb-8">Future Starts Here</p>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
        <p className="text-md md:text-lg mb-2">📧 <a href="mailto:rmas@masxort.com" className="text-blue-300 hover:underline">rmas@masxort.com</a></p>
        <p className="text-md md:text-lg">📞 <a href="tel:+13057640077" className="text-blue-300 hover:underline">305-764-0077</a></p>
      </div>
      <footer className="mt-10 text-sm text-gray-400">Built with ❤️ by MiAngel AI and Rafael Mas</footer>
    </main>
  );
}
