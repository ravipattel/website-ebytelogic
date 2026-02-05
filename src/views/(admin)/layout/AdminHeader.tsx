"use client";
import Image from 'next/image';
import React from 'react'
import { FiUser, FiMenu } from "react-icons/fi";

const AdminHeader = () => {
    const toggleMobileSidebar = () => {
        window.dispatchEvent(new CustomEvent("toggleSidebar"));
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
            <div className="flex items-center justify-between h-full px-4 md:px-6">

                {/* Mobile Sidebar Toggle */}
                <button
                    className="lg:hidden text-gray-600 hover:text-gray-900"
                    onClick={toggleMobileSidebar}
                >
                    <FiMenu size={24} />
                </button>

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Image src="/logo.png" height={160} width={160} alt="Logo" />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <FiUser className="text-white" />
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-medium">Admin User</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader