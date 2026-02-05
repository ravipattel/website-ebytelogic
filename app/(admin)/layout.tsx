"use client";

import { Provider } from "react-redux";
import store from "@/src/store";

import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminHeader from "@/src/views/(admin)/layout/AdminHeader";
import AdminSidebar from "@/src/views/(admin)/layout/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <Provider store={store}>
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100">
          <AdminHeader />
          <div className="flex pt-16">
            <AdminSidebar />
            <main className="flex-1 p-6">
                {children}
            </main>
          </div>
        </div>
      </ProtectedRoute>
    </Provider>
  );
}
