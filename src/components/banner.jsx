"use client";
import React, { useState } from 'react';

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://scontent.fntr1-1.fna.fbcdn.net/v/t39.30808-6/399958466_879424233707099_8002769092585052406_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B7DhM9MW2EcAX_hQVNV&_nc_oc=AQk1JgwNwZ5XEmEKBg4HgbTlarvPzC5QqDpBMP5B0i4S7kUPYXGOMva4pmjWD7QAtTU&_nc_ht=scontent.fntr1-1.fna&oh=00_AfBrTiPefM9OFXSa1_rFevW4hdJSQoEgnny8wcKj9boOkQ&oe=654DEED5",
    "https://scontent.fntr1-2.fna.fbcdn.net/v/t39.30808-6/399891736_879485717034284_5386204945098827939_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gAD82G1cXqkAX9OBCfk&_nc_ht=scontent.fntr1-2.fna&oh=00_AfAe8Ovjgb9GuicL4DfpjBmBoYIzzLyCXLMBe--A4XouLA&oe=654CCAD5",
    "https://scontent.fntr1-1.fna.fbcdn.net/v/t39.30808-6/399937039_879488100367379_5521668960059582335_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nniLCOhuftgAX9omBFH&_nc_ht=scontent.fntr1-1.fna&oh=00_AfCKNu7eSwr7ZtbE70x364gBjnNJTe2qRdJLOR-JQOJX0Q&oe=654DBA27"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[100%]  md:w-[70%] relative flex items-center justify-center mt-24 mb-20 md:mt-40 md:mb-32 rounded-lg mx-auto ">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== currentSlide}
        >
          <img src={img} className="rounded-lg mx-auto" alt={`Banner ${index + 1}`} />
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 p-4 focus:outline-none"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 p-4 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
}


