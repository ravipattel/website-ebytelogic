"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineSecurity } from "react-icons/md";
import { loginUser } from "@/src/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser({ email, password });

      if (response.success) {
        // Redirect to dashboard or home page
        router.push("/admin/dashboard");
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-[#3078fb] opacity-20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-[#3078fb] opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-2xl p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#3078fb] text-white p-4 rounded-xl shadow-lg mb-4">
            <MdOutlineSecurity className="text-3xl" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            eBytelogic CMS
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Secure Admin Access
          </p>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm text-gray-600 mb-2 block">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3078fb] focus:outline-none transition"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="text-sm text-gray-600 mb-2 block">
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3078fb] focus:outline-none transition"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#3078fb] text-white py-3 rounded-lg font-semibold hover:scale-[1.02] hover:bg-[#1f63d6] transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          <MdOutlineSecurity />
          Authorized personnel only
        </div>

      </div>
    </div>
  );
}