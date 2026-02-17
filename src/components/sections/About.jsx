import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-grid">
                <div className="about-images">
                    <div className="img-wrapper main-img">
                        <img src="/assets/images/541651898_122117478710955120_2986338890182881825_n.jpg" alt="Restaurant Interior" />
                    </div>
                    <div className="img-wrapper side-img">
                        <img src="/assets/images/541334091_122117407820955120_7221358096316832118_n.jpg" alt="Dining Table" />
                    </div>
                </div>
                <div className="about-content">
                    <h4 className="section-subtitle">Our Heritage</h4>
                    <h2 className="section-title">Crafting Memorable <br />Dining Experiences</h2>
                    <p>
                        Sura is more than just a restaurant; it's a destination for those who appreciate the finer things in life. Our culinary philosophy is rooted in sourcing the highest quality ingredients and transforming them into edible masterpieces.
                    </p>
                    <p>
                        From our meticulously curated wine list to our warm, attentive service, every detail at Sura is designed to provide an atmosphere of relaxed luxury and culinary discovery.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-num">15+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">20+</span>
                            <span className="stat-label">Signature Dishes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
