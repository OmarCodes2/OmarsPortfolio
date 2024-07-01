'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "https://via.placeholder.com/400x300", label: "Student" },
  { src: "https://via.placeholder.com/400x300", label: "Speaker" },
  { src: "https://via.placeholder.com/400x300", label: "Developer" },
  { src: "https://via.placeholder.com/400x300", label: "Designer" },
  { src: "https://via.placeholder.com/400x300", label: "Leader" },
];

export const IntroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="intro" className="p-8 flex flex-col md:flex-row justify-center items-center text-center md:text-left" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="flex flex-col justify-center items-start md:mr-16 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg flex flex-wrap justify-center md:justify-start">
          I am a 
          <span 
            className={`font-semibold ml-2 inline-block`}
            style={{ width: '120px', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            <span className="roll-up" key={currentIndex}>
              {images[currentIndex].label}
            </span>
          </span> 
          passionate about coding and technology.
        </p>
      </div>
      <div className="w-full max-w-xs md:max-w-md">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
