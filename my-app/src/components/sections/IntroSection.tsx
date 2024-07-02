'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/student.png", label: "Student" },
  { src: "/coop.png", label: "Coop" },
  { src: "/leader.png", label: "Leader" },
  { src: "/hacker.png", label: "Hacker" },
  { src: "/speaker.png", label: "Speaker" },
  { src: "/foodie.png", label: "Foodie" },
  { src: "/sportsman.png", label: "Sportsman" },
  { src: "/friend.png", label: "Friend" },
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
    <section id="intro" className="p-8 flex flex-col md:flex-row justify-center items-center text-center md:text-left mx-auto" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="flex flex-col justify-center items-center md:items-start md:mr-8 mb-8 md:mb-0 md:w-2/5">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg flex flex-wrap justify-center md:justify-start">
          <span className="text-2xl mr-2">I am a</span>
          <span 
            className="font-semibold text-2xl inline-block"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textAlign: 'center' }}
          >
            <span className="roll-up" key={currentIndex}>
              {images[currentIndex].label}
            </span>
          </span>
        </p>
        <p className="mt-4 text-lg text-center md:text-left">
          passionate about coding and technology and looking to make the world a better place.
        </p>
      </div>
      <div className="w-full max-w-xs md:max-w-md md:w-2/5">
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
          <CarouselPrevious style={{ display: 'none' }} />
          <CarouselNext style={{ display: 'none' }} />
        </Carousel>
      </div>
    </section>
  );
};
