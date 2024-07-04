import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

export default function ScrollTopPage() {
    const scrollTopRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleScrollTop = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleScrollTop);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', toggleScrollTop);
        };
    }, []);

    return (
        <button
            aria-label="Scroll to top"
            id="scroll-top"
            ref={scrollTopRef}
            className={`scroll-top ${isVisible ? 'active' : ''}`}
            onClick={handleScrollToTop}
        >
            <i className="bi bi-arrow-up-short"></i>
        </button>
    );
}
