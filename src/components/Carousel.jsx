import React from 'react'
import Card from './Card'
import Arrow from './Arrow'
import { useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const PopularCarousel = () => {

  const destinations = [
    {
      id: "1",
      name: "americas",
      urls: [
        "Cordoba.jpg",
        "Santiago.jpg",
        "Lima.jpg",
        "Rio.jpg",
      ],
    },
    {
      id: "2",
      name: "europe",
      urls: [
        "Madrid.jpg",
        "Berlin.jpg",
        "Paris.jpg",
        "London.jpg",
      ],
    },
    {
      id: "3",
      name: "asia",
      urls: [
        "Bangkok.jpg",
        "Seoul.jpg",
        "Beijing.jpg",
        "Tokyo.jpg",
      ],
    },
  ];
  const removeExtension = (filename) => {
    return filename.split(".")[0];
  };


  return (
    <>
    <div className='flex justify-center flex-col items-center '>
<h1 className='text-lg sm:text-2xl text-white italic font-bold bg-black bg-opacity-75 py-1 px-2 rounded-2xl mb-4 '>Popular myTineraries!</h1>

    <div className='w-70% flex justify-center align-middle items-center'>
    <Carousel showStatus={false}
    showArrows={true}
    showThumbs={false}
    autoPlay={true}
    interval={5000}
    infiniteLoop = {true}
    width={"70%"}
    className='flex justify-center mb-7'>

{destinations.map((city) => (
          <div
            className="grid grid-cols-2 justify-center rounded sm:grid-cols-4 gap-2 "
            key={city.id}
          >
            {city.urls.map((url, index) => (
              <div
                key={index}
                className="relative h-36 "
              >
                <img
                  src={url}
                  alt={city.name}
                  className="w-full h-full rounded "
                />
                <div className="absolute bottom-0 w-full text-center font-bold text-lg text-white bg-black border-fuchsia-400 ">
                  <p>{removeExtension(url)}</p> 
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
    </div>
    </>
);
}

export default PopularCarousel