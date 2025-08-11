'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.5;
      currentY += (mouseY - currentY) * 0.5;
      outer.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`; // adjust for 40px size
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-blue-500 pointer-events-none z-[9999] mix-blend-normal transition-transform duration-150"
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-500 pointer-events-none z-[9999] mix-blend-normal transform -translate-x-1 -translate-y-1"
      />
    </>
  );
}
