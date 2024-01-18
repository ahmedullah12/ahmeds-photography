import React from "react";
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'

const Banner = () => {
  const images = [
    banner1,
    banner2,
    banner3,
  ]
  return (
    <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[600px]">
      
      {
        images.map((img, i) => <div key={i} id={`slide${i + 1}`} className="carousel-item relative w-full">
        <img src={img}  className="w-full" alt="" />
        <div className="absolute top-[30%] md:top-[40%] lg:top-[40%] left-[20%] md:left-[30%] lg:left-[40%] text-center text-white">
          <h3 className="mb-3 text-base md:text-2xl lg:text-4xl">Ahmed's Photography</h3>
          <p className="text-xs md:text-base">I am a professional photographer and <br /> The best one you will find.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <a href={`#slide${i === 0 ? images.length : i}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${i === images.length - 1 ? 1 : i + 2}`}  className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>)
      }
    </div>
  );
};

export default Banner;
