import { useEffect, useState } from 'react';
import './Carousel.css';

const availableSlides = [
  {
    src: 'jmac01.jpg',
    alt: 'Foto de Jhon Mauricio Aguirre Cortés con un puente de fondo, usando gafas de sol.'
  },
  {
    src: 'jmac02.jpg',
    alt: 'Foto 2'
  },
  {
    src: 'jmac03.jpg',
    alt: 'Foto 3'
  },
  {
    src: 'jmac04.jpg',
    alt: 'Foto 4'
  },
  {
    src: 'jmac05.jpg',
    alt: 'Foto 5'
  },
  {
    src: 'jmac06.jpg',
    alt: 'Foto 6'
  }
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  function prevSlide() {
    const newSlide = slide === 0 ? availableSlides.length - 1 : slide - 1;
    setSlide(newSlide);
  }

  function nextSlide() {
    const newSlide = slide === availableSlides.length - 1 ? 0 : slide + 1;
    setSlide(newSlide);
  }

  useEffect(() => {
    const secondsPerSlide = 10;

    // Set up the interval
    const intervalId = setInterval(nextSlide, secondsPerSlide * 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  });

  return (
    <div className="Carousel">
      <button className="Carousel-button Carousel--prevButton" onClick={prevSlide}>
        &lt;
      </button>
      <button className="Carousel-button Carousel--nextButton" onClick={nextSlide}>
        &gt;
      </button>
      <img className="Carousel-img" src={availableSlides[slide].src} alt={availableSlides[slide].alt} />
      {/* <span className="Carousel-number">{slide}</span> */}
    </div>
  );
};

export default Carousel;
