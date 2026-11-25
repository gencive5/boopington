import { useState, useEffect, useCallback } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import c1 from '../assets/images/c1.JPG';
import c2 from '../assets/images/c2.JPG';
import c3 from '../assets/images/c3.JPG';
import c4 from '../assets/images/c4.JPG';
import c5 from '../assets/images/c5.JPG';
import c6 from '../assets/images/c6.JPG';


const slides = [c1, c2, c3, c4, c5, c6];
const SLIDE_COUNT = slides.length;
const SCROLL_LOCK_MS = 800;

function Editorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const goNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % SLIDE_COUNT);
  }, []);

  const goPrevious = useCallback(() => {
    setActiveIndex(i => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  // wheel + keyboard listeners
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = (event) => {
      if (!canScroll) return;

      clearTimeout(scrollTimeout);
      setCanScroll(false);

      const delta = Math.sign(event.deltaY);
      if (delta !== 0) {
        setActiveIndex(i => (i + delta + SLIDE_COUNT) % SLIDE_COUNT);
      }

      scrollTimeout = setTimeout(() => setCanScroll(true), SCROLL_LOCK_MS);
    };

    const handleKeydown = (event) => {
      if (event.key === 'ArrowUp') goPrevious();
      else if (event.key === 'ArrowDown') goNext();
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [canScroll, goNext, goPrevious]);

  // shared Carousel.Item list factory
  const renderItems = (imgClassName) =>
    slides.map((src, i) => (
      <Carousel.Item key={i}>
        <div className="carousel-item-wrapper">
          <img className={imgClassName} src={src} alt={`Slide ${i + 1}`} />
        </div>
      </Carousel.Item>
    ));


  return (
    <>
      <Carousel
        interval={null}
        activeIndex={activeIndex}
        indicators={false}
        onSelect={(i) => setActiveIndex(i)}
        className="carousel2 slide transform carousel-fade"
      >
        {renderItems('carousel-bg-img')}
      </Carousel>
      
    </>
  );
}

export default Editorial;