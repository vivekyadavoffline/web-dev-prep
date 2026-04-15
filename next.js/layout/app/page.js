import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      
      {/* Hero Section */}
      <div className="text-center max-w-2xl space-y-6">
        
        <h1 className="text-4xl font-bold text-gray-800">
          Connect with People Around the World 🌍
        </h1>

        <p className="text-gray-600">
          Share your thoughts, interact with others, and build your digital presence.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            href="/about"
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">📝 Post Content</h3>
          <p className="text-gray-600 text-sm mt-2">
            Share updates, ideas, and experiences with your network.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">💬 Comments</h3>
          <p className="text-gray-600 text-sm mt-2">
            Engage in conversations and interact with others.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">🔐 Secure Access</h3>
          <p className="text-gray-600 text-sm mt-2">
            Your data is protected with secure authentication.
          </p>
        </div>

      </div>
    </div>
  );
}