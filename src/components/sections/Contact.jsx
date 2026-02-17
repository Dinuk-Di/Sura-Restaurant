import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-grid">
                <div className="contact-info">
                    <h4 className="section-subtitle">Reservations</h4>
                    <h2 className="section-title">Visit Us & Experience <br />the Extraordinary</h2>
                    <p className="contact-desc">
                        Whether it's an intimate dinner or a grand celebration, 
                        our team is ready to provide you with an unforgettable experience.
                    </p>
                    <div className="info-items">
                        <div className="info-item">
                            <h5>Location</h5>
                            <p>123 Culinary Ave, Gastronomy District, NY 10001</p>
                        </div>
                        <div className="info-item">
                            <h5>Dining Hours</h5>
                            <p>Mon - Sun: 12:00 PM - 11:30 PM</p>
                        </div>
                        <div className="info-item">
                            <h5>Contact</h5>
                            <p>+1 (555) SURA-REST <br />reservations@sura-restaurant.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-row">
                            <input type="date" required />
                            <input type="number" placeholder="Guests" min="1" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Special Requests" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Book a Table</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
