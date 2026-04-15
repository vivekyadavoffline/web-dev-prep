import React from "react";


const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    
      {/* Admin Content */}
      <main className="flex-1 flex">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
          <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-600 cursor-pointer">Comments</li>
            <li className="hover:text-blue-600 cursor-pointer">Users</li>
            <li className="hover:text-blue-600 cursor-pointer">Settings</li>
          </ul>
        </aside>

        {/* Page Content */}
        <section className="flex-1 p-6">
          {children}
        </section>

      </main>
    </div>
  );
};

export default AdminLayout;