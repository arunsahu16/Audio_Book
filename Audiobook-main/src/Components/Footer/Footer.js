import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container-footer footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-12 footer-about">
                        <Link aria-current="page" to="/" className="logo d-flex align-items-center">
                            <span>AudioBook<span style={{ color: '#e84545' }}>.</span></span>
                        </Link>
                        <p><strong>AudioBook</strong> offers a diverse range of audio content, from engaging courses and motivating talks to captivating stories. Discover enriching audio experiences tailored to enhance your learning and entertainment.</p>
                        <div className="social-links d-flex mt-4">
                            <Link aria-current="page" to="/"><i className="bi bi-twitter"></i></Link>
                            <Link aria-current="page" to="/"><i className="bi bi-facebook"></i></Link>
                            <Link aria-current="page" to="/"><i className="bi bi-instagram"></i></Link>
                            <Link aria-current="page" to="/"><i className="bi bi-linkedin"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><Link aria-current="page" to="/">About Us</Link></li>
                            <li><Link aria-current="page" to="/">Careers</Link></li>
                            <li><Link aria-current="page" to="/">Our Team</Link></li>
                            <li><Link aria-current="page" to="/">Partner Program</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>LEGAL</h4>
                        <ul>
                            <li><Link aria-current="page" to="/contact">Contact Us</Link></li>
                            <li><Link aria-current="page" to="/">Privacy Policy</Link></li>
                            <li><Link aria-current="page" to="/">Terms & Conditions</Link></li>
                            <li><Link aria-current="page" to="/">Delivery Policy</Link></li>
                            <li><Link aria-current="page" to="/">Cancellation & Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>GENERAL</h4>
                        <ul>
                            <li><Link aria-current="page" to="/blog">Blog</Link></li>
                            <li><Link aria-current="page" to="/contact">Help & Support</Link></li>
                            <li><Link aria-current="page" to="/">About Us</Link></li>
                            <li><Link aria-current="page" to="/register">Register</Link></li>
                            <li><Link aria-current="page" to="/login">Login</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>IIT Jodhpur, Karwar</p>
                        <p>Surpura Bypass Rd, Jheepasani</p>
                        <p>Rajasthan, India, 342030</p>
                        <p className="mt-4"><strong>Phone:</strong> <span>+91 805 742 0700</span></p>
                        <p><strong>Email:</strong> <span>audiobook@gmail.com</span></p>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center">
                <p>&copy; <span>Copyright</span> <strong className="px-1">AudioBook</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <Link aria-current="page" to="/">AudioBook</Link>
                </div>
            </div>
        </footer>
    );
}
