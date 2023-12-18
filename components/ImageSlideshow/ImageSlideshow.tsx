"use client";

import React, { useEffect, useState } from "react";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import Image from "next/image";

interface ImageSlideshowProps {}

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-500 ${
            index === currentImageIndex
              ? "z-[1] opacity-[1] transform scale-100 translate-x-0 rotate-0"
              : ""
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
