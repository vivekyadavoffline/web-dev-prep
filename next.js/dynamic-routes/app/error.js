"use client"

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
      {/* Big 500 */}
      <h1 className="text-8xl font-extrabold tracking-widest text-red-500 drop-shadow-lg">
        500
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-2xl font-semibold">
        Something went wrong!
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-400 text-center max-w-md">
        We're sorry, but something went wrong. Please try again later.
      </p>

      {/* Button */}
      <button
        onClick={reset}
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-lg font-medium shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Try Again
      </button>

    </div>
  );
}