import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ children, autoPlay = false, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [height, setHeight] = useState('auto');
    const contentRef = useRef(null);
    const length = React.Children.count(children);

    const next = useCallback(() => {
        if (currentIndex < length - 1) {
            setCurrentIndex(prevState => prevState + 1);
        } else {
            setCurrentIndex(0);
        }
    }, [currentIndex, length]);

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        } else {
            setCurrentIndex(length - 1);
        }
    };

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [currentIndex, autoPlay, interval, next]);

    useEffect(() => {
        if (contentRef.current) {
            const currentSlide = contentRef.current.children[currentIndex];
            if (currentSlide) {
                setHeight(currentSlide.offsetHeight);
            }
        }
    }, [currentIndex, children]);


    return (
        <div className="carousel-container">
            <div
                className="carousel-wrapper"
                style={{ height: height !== 'auto' ? `${height}px` : 'auto' }}
            >
                <div
                    className="carousel-content-wrapper"
                    ref={contentRef}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {React.Children.map(children, (child) => (
                        <div className="carousel-item">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {length > 1 && (
                <>
                    <button onClick={prev} className="carousel-arrow left-arrow">
                        <FaChevronLeft />
                    </button>
                    <button onClick={next} className="carousel-arrow right-arrow">
                        <FaChevronRight />
                    </button>
                </>
            )}
            <div className="carousel-dots">
                {Array.from({ length }).map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
