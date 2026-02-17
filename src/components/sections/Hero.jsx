import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h4 className="hero-subtitle">Welcome to Sura</h4>
                <h1 className="hero-title">A Symphony of <br /><span>Exquisite Flavors</span></h1>
                <p className="hero-description">
                    Experience the pinnacle of fine dining where tradition meets modern culinary artistry. 
                    Every dish tells a story of passion, precision, and elegance.
                </p>
                <div className="hero-btns">
                    <a href="#menu" className="btn-primary">Explore Menu</a>
                    <a href="#about" className="btn-secondary">Our Story</a>
                </div>
            </div>
            <div className="hero-scroll">
                <div className="mouse"></div>
                <span>Scroll Discover</span>
            </div>
        </section>
    );
};

export default Hero;
