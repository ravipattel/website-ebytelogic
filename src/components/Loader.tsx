'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 7000);
    const hideTimer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <video
          autoPlay
          muted
          playsInline
          src="/ebytelogic.mp4"
        />
      </div>
    );
  }

  return <>{children}</>;
}
