'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '@/src/assets/images/logo.png';

  const messages = [
    'Optimizing Pipelines…',
    'Booting in 3 Seconds…',
    'Syncing Audio & Video…',
    'Loading Innovation…',
  ];

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messageDisplayTime = 1200; 
  const fadeOutDelay = 800;
  const totalLoadingTime = messages.length * messageDisplayTime + fadeOutDelay;

useEffect(() => {
  if (hasLoadedOnce) return;

  setLoading(true);
  setFadeOut(false);
  setProgress(0);

  const totalLoadingTime = 1500; 
  const messageDisplayTime = totalLoadingTime / messages.length;

  // Progress bar
  const progressInterval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(progressInterval);
        return 100;
      }
      return prev + 1;
    });
  }, totalLoadingTime / 100);

  // Message transition
  let messageIndex = 0;
  const messageInterval = setInterval(() => {
    messageIndex += 1;
    if (messageIndex < messages.length) {
      setCurrentMessageIndex(messageIndex);
    } else {
      clearInterval(messageInterval);
    }
  }, messageDisplayTime);

  // Fade out and hide
  const fadeTimer = setTimeout(() => setFadeOut(true), totalLoadingTime);
  const hideTimer = setTimeout(() => {
    setLoading(false);
    setHasLoadedOnce(true);
  }, totalLoadingTime + 500); 

  return () => {
    clearInterval(progressInterval);
    clearInterval(messageInterval);
    clearTimeout(fadeTimer);
    clearTimeout(hideTimer);
  };
}, [hasLoadedOnce]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className="text-center">
          <Image src={Logo} alt="logo" className="h-12 w-auto mx-auto mb-2" />
          <p className="text-base text-gray-500 mb-4">
            From Silicon to Streaming – Smarter Embedded Software
          </p>

          <div className="w-60 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-400 mt-1">{messages[currentMessageIndex]}</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
