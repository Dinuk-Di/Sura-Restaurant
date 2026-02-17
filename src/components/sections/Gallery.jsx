import React, { useRef, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const images = [
        '/assets/images/541484289_122117474348955120_8237584939082130099_n.jpg',
        '/assets/images/542013727_122117407484955120_5403800622236925_n.jpg',
        '/assets/images/541479244_122117473442955120_2330229621402633121_n.jpg',
        '/assets/images/542708278_122117478836955120_8284940686989543695_n.jpg',
        '/assets/images/541677443_122117407808955120_1647467014442945057_n.jpg',
        '/assets/images/542049452_122117473736955120_3965403185522881663_n.jpg',
        '/assets/images/541423101_122117473772955120_3533837442095353725_n.jpg',
        '/assets/images/541651898_122117478710955120_2986338890182881825_n.jpg'
    ];

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="gallery" className="gallery">
            <div className="gallery-header">
                <h4 className="section-subtitle">Visual Journey</h4>
                <h2 className="section-title">The Vibe of Sura</h2>
            </div>
            <div 
                className={`gallery-scroll-container ${isDown ? 'active' : ''}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="gallery-track">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item-large">
                            <img src={img} alt={`Gallery ${index}`} />
                            <div className="gallery-overlay">
                                <span>SURA Moments</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="indicator-line"></div>
                <span>Drag or scroll to explore</span>
            </div>
        </section>
    );
};

export default Gallery;
