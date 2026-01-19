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
import JsonLd from "./JsonLd";

const localBusinessSchema={
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "eByte Logic",
  "image": ["https://www.ebytelogic.com/logo.png"],
  "url": "https://www.ebytelogic.com/",
  "telephone": "+91 90332 23700",
  "description": "eByteLogic - Embedded systems, IoT integration, multimedia frameworks and AV-over-IP engineering services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1114, Ganesh Glory, Jagatpur Rd, S.G. Highway, Gota",
    "addressLocality": "Ahmedabad",
    "postalCode": "382481",
    "addressCountry": "IN"
  },
  "priceRange": "Contact for pricing",
  "sameAs": [
    "https://www.linkedin.com/company/ebytelogic"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    }
  ]
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideRoutes = ["/login"];

  const shouldHide = hideRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <Loader>
      {!shouldHide && (
        <>
          <Header />
          <JsonLd json={localBusinessSchema} />
          <CustomCursor />
        </>
      )}

      <main className="relative min-h-screen">
        
        {children}
      </main>

      {!shouldHide && (
        <>
          <Footer />
          <TopButton />
          <Clarity />
          <Analytics />
          <Tawk />
        </>
      )}
    </Loader>
  );
}
