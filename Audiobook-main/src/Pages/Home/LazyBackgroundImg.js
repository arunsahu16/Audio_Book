import React from 'react';
import background from '../../Assets/bg.webp'
import { Link } from 'react-router-dom';
import ScrollToSomeSection from '../../Components/ScrollToSomeSection';
import './Home.css';

export default function LazyBackgroundImage() {
    return (
        <div className="home" style={{ backgroundImage: `url(${background})` }} data-aos="fade-in">
            <header className="home-header">
                <div className="brand-name">
                    <h1>AudioBook</h1>
                    <h2 className="we-listen">Listen<span>.</span> Learn<span>.</span> Live<span>.</span></h2>
                </div>
            </header>

            <main className="main-content">
            </main>
            <ScrollToSomeSection section="services" />
        </div>
    );
}
