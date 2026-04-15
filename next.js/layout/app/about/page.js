import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          About This Website
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center">
          This platform is designed to connect people, share ideas, and build meaningful digital experiences — inspired by modern social platforms like Facebook.
        </p>

        {/* Sections */}
        <div className="space-y-4">
          
          <div>
            <h2 className="font-semibold text-lg text-blue-600">👨‍💻 Creator</h2>
            <p className="text-gray-600">
              Built by a passionate developer aiming to create engaging and user-friendly web applications.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-blue-600">🎯 Purpose</h2>
            <p className="text-gray-600">
              To provide a platform where users can interact, share content, and stay connected.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-blue-600">✨ Features</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>User authentication</li>
              <li>Post sharing</li>
              <li>Responsive design</li>
              <li>Modern UI/UX</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-blue-600">🚀 Future Plans</h2>
            <p className="text-gray-600">
              Adding real-time chat, notifications, and advanced personalization features.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-blue-600">📩 Contact</h2>
            <p className="text-gray-600">
              Reach out for collaboration or feedback.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;