"use client";
import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // load the external gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-07X0PHDETP";
    document.head.appendChild(script);

    // inline gtag config script
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-07X0PHDETP');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
};

export default Analytics;
