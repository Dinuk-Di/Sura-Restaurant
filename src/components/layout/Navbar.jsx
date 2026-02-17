import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <img src="/assets/images/logo.jpg" alt="Sura Logo" />
                    <span className="logo-text">SURA</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">Our Story</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#contact" className="btn-primary">Reserve Table</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
