"use client";
import React, { useState } from 'react';

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://scontent.fntr1-1.fna.fbcdn.net/v/t39.30808-6/401822618_884446803204842_4594266605929078488_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGH0iS4FERkUjYebZfzKj2d8qixbF0SvbTyqLFsXRK9tDf0TVmreCIrTSPjIJ5GvEA0BOup3UD6V9_Z_fVstzq4&_nc_ohc=4fHOpZ38hIgAX8y7ZTk&_nc_ht=scontent.fntr1-1.fna&oh=00_AfB22iyZFNdyKsWHZpxtu5mr76sRP6F85fEO-IwY9yhRsQ&oe=655A0A7F",
    "https://scontent.fntr1-2.fna.fbcdn.net/v/t39.30808-6/401844541_884446709871518_4792058254960132951_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGRUEi2Aao3_yL7ZyxGdqt9ZLAXY6vdR2xksBdjq91HbNy9vgN9GEyUrbD6aC2mQ5epZgCiQBbTHobDa8HnYwJl&_nc_ohc=YWWEMXEWCkIAX9AKozM&_nc_ht=scontent.fntr1-2.fna&oh=00_AfAVORxaNRLWu38Ur-VL3I43k0YWQp0HgRr89Tf3u3VKWg&oe=655A54CC",
    "https://scontent.fntr1-1.fna.fbcdn.net/v/t39.30808-6/401849085_884446616538194_6414346000010287521_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKHG_FvM_pC9UU1jnos04D6FLeBMOWziroUt4Ew5bOKgQLu8LPMKEykjzGgufe52s2gwWP8IE881NMbtff4FOK&_nc_ohc=sU_iLRnL_o0AX__61XK&_nc_oc=AQlVxr3RxhqDcyyOBOUYC2fWsqAUl3-4gU0phsom9QYSyA2buhUhLAkKmG83i_YL4Wo&_nc_ht=scontent.fntr1-1.fna&oh=00_AfDAE_wCSu8lGA7MZT0oa-usZc71aMrUJtZdnQ_GgV55hw&oe=65597830"
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


