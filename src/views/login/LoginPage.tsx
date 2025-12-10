
"use client";
import { MdOutlineSecurity } from "react-icons/md";

export default function LoginPage() {


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MdOutlineSecurity className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">eBytelogic</h1>
          <p className="text-gray-600 text-sm">Content Management System</p>
        </div>

        {/* Login Form */}
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            disabled
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Authorized personnel only
        </div>
      </div>
    </div>
  );
}
