import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, autoplay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => { isAnimatingRef.current = false; }, 600);
    }, 12000);

    return () => clearInterval(interval);
  }, [autoplay, images.length]);

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
        setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => { isAnimatingRef.current = false; }, 600);
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => { isAnimatingRef.current = false; }, 600);
  };

  const goToSlide = (index) => {
    if (isAnimatingRef.current || index === currentIndex) return;
    isAnimatingRef.current = true;
        setCurrentIndex(index);
    setTimeout(() => { isAnimatingRef.current = false; }, 600);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="carousel-container">
      <div 
        className="professional-carousel"
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex
                  ? 'active'
                  : index < currentIndex
                  ? 'prev'
                  : 'next'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Slide ${index + 1}`}
                className="carousel-image"
              />
              {image.caption && (
                <div className="carousel-caption">
                  <h3>{image.caption}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          className="carousel-button carousel-button-prev" 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className="carousel-button carousel-button-next" 
          onClick={handleNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="carousel-pagination">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

