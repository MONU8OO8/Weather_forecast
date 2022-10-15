import React from "react";
import Image from 'next/image'
import london from "/public/london.jpg"
import mumbai from "/public/mumbai.jpg"
import tokyo from "/public/tokyo.jpg"
import sydney from "/public/sydney.jpg"
import lucknow from "/public/lucknow.webp"

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
      src: london,
    },
    {
      id: 2,
      title: "Mumbai",
      src: mumbai,
    },
    {
      id: 3,
      title: "Tokyo",
      src: tokyo,
    },
    {
      id: 4,
      title: "Lucknow",
      src: lucknow,
    },
    {
      id: 5,
      title: "Sydney",
      src: sydney,
    },
  ];

  return (
    <div className="flex items-center justify-around my-4">
      {cities.map((city) => (
        
        <div className="h-40 w-12 md:w-28 rounded-md" key={city.id}>
        <Image className="rounded-md" src={city.src}
          alt=""
          // layout="fill"
          // objectFit="cover"
          width={1000}
          height={1200}
           ></Image>
        
        <button
          
          className="text-white text-xs md:text-base font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
          
          
        </button>
        </div>
      ))}
    </div>
  );
}

export default TopButtons;