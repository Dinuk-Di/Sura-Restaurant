import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/assets/images/logo.jpg" alt="Sura Logo" />
                        <h2>SURA</h2>
                    </div>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="footer-socials">
                        <a href="#">FB</a>
                        <a href="#">IG</a>
                        <a href="#">TW</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>\u0026copy; {new Date().getFullYear()} Sura Restaurant. All rights reserved.</p>
                    <p>Modern Dining Redefined.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
