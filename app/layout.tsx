import type { Metadata } from "next";

import "@/src/assets/css/globals.css"
import ClientLayout from "@/src/components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ebytelogic.com/"),
  title: {
    absolute: "eByteLogic | Embedded Software Development Company",
  },
  description: "eByteLogic is the expert in embedded software development, specialising in BSP development and low-latency streaming. Book your embedded software consulting​ today.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "eByteLogic",
    url: "https://www.ebytelogic.com/",
    title: "eByteLogic | Embedded Software Development Company",
    description: "eByteLogic is the expert in embedded software development, specialising in BSP development and low-latency streaming. Book your embedded software consulting​ today.",
    images: [
      {
        url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png",
        width: 1200,
        height: 630,
        alt: "eByteLogic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "eByteLogic | Embedded Software Development Company",
    description: "eByteLogic is the expert in embedded software development, specialising in BSP development and low-latency streaming. Book your embedded software consulting​ today.",
    images: ["https://www.ebytelogic.com/ogimage/ebyteogimage.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //  <html lang="en" className={poppins.variable}>
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <script type="text/javascript"> (function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "smd3oiuiik"); </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-07X0PHDETP"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-07X0PHDETP'); </script> */}
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
