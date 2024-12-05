import React, { useState, useEffect } from 'react';
import './ImageSliderComponent.scss';

const images = [
    '../assets/images/pic1.jpg',
    '../assets/images/office group.jpg',
    '../assets/images/pic2.jpg',
    '../assets/images/pic3.jpg'
    // Add more images as needed
];

const ImageSliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext(); // Automatically change image
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const handleNext = () => {
        console.log("Next button clicked"); // Debug log
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 500); // Duration of the fade
    };

    const handlePrev = () => {
        console.log("Previous button clicked"); // Debug log
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 500); // Duration of the fade
    };

    return (
        <div className="image-slider">
            <img
                src={images[currentIndex]}
                alt="Slider"
                className={`slider-image ${fade ? 'fade' : ''}`}
            />
            <div className={`overlay ${fade ? 'fade' : ''}`} />
            <button className="arrow left" onClick={handlePrev}>&lt;</button>
            <button className="arrow right" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default ImageSliderComponent;
