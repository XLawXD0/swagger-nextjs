import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 w-full">
        <div className="flex items-center space-x-2">
          <i className="fas fa-bolt text-xl"></i>
          <span className="font-semibold text-lg">ScrLxrd Api</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </Link>
          <Link href="/docs">
            <a className="text-gray-600 hover:text-gray-800">Docs</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-sun"></i>
          </a>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">Welcome to ScrLxrd API</h1>
        <p className="text-center text-gray-600 mt-4">
          A simple, free-to-use REST API without the need for an account, API
          key, or usage limits.
        </p>
        <button className="mt-6 px-4 py-2 border border-gray-300 rounded text-gray-800 hover:bg-gray-100">
          Explore
        </button>
      </main>
    </div>
  );
}

