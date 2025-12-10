"use client";

import { usePathname } from "next/navigation";
import Header from "@/src/views/layout/Header";
import Footer from "@/src/views/layout/Footer";
import Loader from "@/src/components/Loader";
import TopButton from "./TopButton";
import Clarity from "./Clarity";
import Analytics from "./Analytics";
import Tawk from "./tawk";
import CustomCursor from "./CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login"];

  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <Loader>
      {!shouldHideNavbar && <Header />}
      <main className="relative min-h-screen">
        <CustomCursor />
        {children}
      </main>
      {!shouldHideNavbar && <Footer />}
      <TopButton />
      <Clarity />
      <Analytics />
      <Tawk />
    </Loader>
  );
}
