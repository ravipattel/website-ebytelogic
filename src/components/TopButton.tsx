'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-32 cursor-pointer right-8 z-50 p-4 group transition-all duration-300 ease-in-out rounded-full
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
        bg-gradient-to-tr from-primary to-indigo-600 shadow-lg hover:shadow-2xl hover:ring-4 ring-primary/30`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="text-white text-xl group-hover:animate-spin-slow" />
        </button>
    );
};

export default TopButton;
