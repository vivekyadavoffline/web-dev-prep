import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold tracking-widest text-blue-500 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
        Don’t worry, let’s get you back on track.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-lg font-medium shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        ⬅ Go back Home
      </Link>

    </div>
  );
}