"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FiHome,
  FiChevronLeft,
  FiChevronRight,
  FiBookOpen,
} from "react-icons/fi";

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
    { title: "Blogs", icon: FiBookOpen, path: "/admin/blogs" },
  ];

  useEffect(() => {
    window.addEventListener("toggleSidebar", () =>
      setMobileOpen((prev) => !prev)
    );
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-slate-900 text-white transition-all z-50
        ${isCollapsed ? "w-20" : "w-64"} 
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-blue-600 rounded-full p-1.5"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>

        <nav className="mt-6">
          {menu.map((item) => {
            const active = pathname === item.path;
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg mb-1
                  ${
                    active
                      ? "bg-blue-600 shadow text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }
                `}
              >
                <Icon size={20} />
                {!isCollapsed && <span className="text-sm">{item.title}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content Margin */}
      <div className={`${isCollapsed ? "ml-20" : "ml-64"} hidden lg:block`} />
    </>
  );
}
