'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '@/src/assets/images/logo.png';

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // If already shown once (i.e. after refresh), skip the loader
    if (hasLoadedOnce) return;

    setLoading(true);
    setFadeOut(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const hideTimer = setTimeout(() => {
      setLoading(false);
      setHasLoadedOnce(true);
    }, 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, [hasLoadedOnce]); // only on first render

  useEffect(() => {
    if (progress >= 100) {
      setFadeOut(true);

      const hideTimer = setTimeout(() => {
        setLoading(false);
        setHasLoadedOnce(true);
      }, 1000); // fade-out duration only

      return () => clearTimeout(hideTimer);
    }
  }, [progress]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className="text-center">
          <Image src={Logo} alt="logo" className="h-12 w-auto mx-auto mb-2" />
          <p className="text-base text-gray-500 mb-4">Transforming Ideas into Intelligent Software</p>

          <div className="w-60 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-400 mt-1">Loading {progress}%</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
