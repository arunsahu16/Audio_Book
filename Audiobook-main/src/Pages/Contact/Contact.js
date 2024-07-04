import React from 'react';
import './style.css';
import HomeNavbar from '../../Components/Navbar';
import ScrollTopPage from '../../Components/ScrollTopPage';


export default function Contact() {
    return (
        <>
            <HomeNavbar />
            <section id="page-header" className="about-header">
                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>
            </section>

            <section id="contact-details" className="section-p1">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.6566437645065!2d73.11280607614516!3d26.466794579110022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur!5e0!3m2!1sen!2sin!4v1719875362659!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Please visit our place</h2>
                    <h3>Head Office</h3>
                    <ul>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>IIT Jodhpur</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <p>audiobook@gmail.com</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <p>+91 805 742 0700</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-clock"></i>
                            <p>Monday to Saturday: 10:00 am - 5:00 pm</p>
                        </li>
                    </ul>
                </div>
                <form>
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button className="normal">Submit</button>
                </form>

                {/* <div className="people">
                    <div className="person">
                        <img src="../Images/Peoples/dp.png" alt="Manish" />
                        <p><span>Manish</span> Founder <br /> Phone: +91 6299753081 <br /> E-mail: mktechno63@gmail.com</p>
                    </div>
                    <div className="person">
                        <img src="../Images/Peoples/dp.png" alt="Manish" />
                        <p><span>Manish</span> Co-Founder <br /> Phone: +91 6299753081 <br /> E-mail: mktechno63@gmail.com</p>
                    </div>
                    <div className="person">
                        <img src="../Images/Peoples/dp.png" alt="Manish" />
                        <p><span>Manish</span> Director <br /> Phone: +91 6299753081 <br /> E-mail: mktechno63@gmail.com</p>
                    </div>
                </div> */}
            </section>

            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="email" placeholder="Your email address" />
                    <button>Sign Up</button>
                </div>
            </section>
            <ScrollTopPage />
        </>
    );
}
