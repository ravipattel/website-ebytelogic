"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  isAuthenticated,
  logoutUser,
} from "@/src/store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // useEffect(() => {
  //   let logoutTimeout: NodeJS.Timeout;

  //   const checkAuthAndScheduleLogout = async () => {
  //     const authenticated = await isAuthenticated();

  //     if (!authenticated) {
  //       await logoutUser();
  //       router.replace("/login");
  //       return;
  //     }

  //     setIsChecking(false);

  //     const expiresAt = localStorage.getItem("session_expires_at");
  //     if (!expiresAt) return;

  //     const remainingTime = Number(expiresAt) - Date.now();

  //     if (remainingTime <= 0) {
  //       await logoutUser();
  //       router.replace("/login");
  //       return;
  //     }

  //     logoutTimeout = setTimeout(async () => {
  //       await logoutUser();
  //       router.replace("/login");
  //     }, remainingTime);
  //   };

  //   checkAuthAndScheduleLogout();

  //   return () => {
  //     if (logoutTimeout) clearTimeout(logoutTimeout);
  //   };
  // }, [router]);

  // if (isChecking) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
  //         <p className="mt-4 text-gray-600">Verifying credentials…</p>
  //       </div>
  //     </div>
  //   );
  // }

  return <>{children}</>;
}
