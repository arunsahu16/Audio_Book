import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

export default function HomeNavbar() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const handleScroll = () => {
            const header = document.querySelector('#header');
            if (header) {
                window.scrollY > 100 ? header.classList.add('sticked') : header.classList.remove('sticked');
            }
        };

        const handleNavbarLinksActive = () => {
            const navbarLinks = document.querySelectorAll('#navbar a');
            navbarLinks.forEach(navbarLink => {
                if (!navbarLink.hash) return;
                const section = document.querySelector(navbarLink.hash);
                if (!section) return;
                const position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarLink.classList.add('active');
                } else {
                    navbarLink.classList.remove('active');
                }
            });
        };

        handleNavbarLinksActive();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleNavbarLinksActive);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mobileNavToggle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        const mobileNavShow = document.querySelector('.mobile-nav-show');
        const mobileNavHide = document.querySelector('.mobile-nav-hide');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    };

    const handleSamePageLinkClick = () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
        }
    };

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={mobileNavToggle}></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={mobileNavToggle}></i>
                    <Link
                        aria-current="page"
                        to="/"
                        className="logo d-flex align-items-center me-auto me-lg-0"
                    >
                        <h1>AudioBook<span>.</span></h1>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link
                                    aria-current="page"
                                    to="/"
                                    className={location.pathname === "/" ? "active" : ""}
                                    onClick={handleSamePageLinkClick}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    aria-current="page"
                                    to="/blog"
                                    className={location.pathname === "/blog" ? "active" : ""}
                                    onClick={handleSamePageLinkClick}
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    aria-current="page"
                                    to="/contact"
                                    className={location.pathname === "/contact" ? "active" : ""}
                                    onClick={handleSamePageLinkClick}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link
                        to="/login"
                        aria-current="page"
                        className={`btn-join-us ${isMobile ? 'mobile-only' : ''}`}
                    >
                        {isMobile ? "Sign In" : "Login / Signup"}
                    </Link>


                </div>
            </header>
        </>
    );
}
