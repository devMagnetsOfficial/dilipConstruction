import React, { useState, useEffect } from 'react';

// Sample slides data
const slides = [
  {
    title: "Building Excellence, One Project at a Time",
    description: "Premium construction services with precision, innovation, and trust.",
    image: "https://th.bing.com/th/id/OIP.B5x4hVttOn67ZRB2YRcy3wHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    buttonText: "Get a Quote"
  },
  {
    title: "Modern & Reliable Construction",
    description: "From residential to commercial projects, we deliver high‑quality solutions.",
    image: "https://th.bing.com/th/id/OIP.dBfoHUBQPhxxOns2RUyiHQHaE8?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    buttonText: "Learn More"
  },
  {
    title: "Transforming Spaces",
    description: "Renovations and remodeling to bring your vision to life.",
    image: "https://th.bing.com/th/id/OIP.wrzAK2q4BI3vHS1z4-74EgHaGk?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    buttonText: "Contact Us"
  },
  {
    title: "Solid Foundations & Quality Builds",
    description: "We focus on structural integrity and robust project delivery.",
    image: "https://th.bing.com/th/id/OIP.zM4SL9YdLGT9yWeTVXylsQHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    buttonText: "Explore Projects"
  },
  {
    title: "Modern Commercial and Residential Projects",
    description: "Architecturally designed buildings for tomorrow’s living.",
    image: "https://i.pinimg.com/originals/e6/51/35/e65135cb8a939a124cfa613ed46902c7.jpg",
    buttonText: "View Portfolio"
  }
];


export default function HeroSliderSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-5xl md:text-6xl font-bold text-accent-gold mb-6 leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-light max-w-3xl mb-8">
              {slide.description}
            </p>
            <button className="bg-accent-gold text-dark py-3 px-10 rounded-lg text-xl hover:bg-primary-blue transition-colors shadow-lg">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral-dark/50 text-light p-3 rounded-full hover:bg-accent-gold transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-dark/50 text-light p-3 rounded-full hover:bg-accent-gold transition-colors"
      >
        &#10095;
      </button>
    </section>
  );
}
