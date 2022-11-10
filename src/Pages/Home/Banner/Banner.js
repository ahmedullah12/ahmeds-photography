import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/4F5Qdm7/car1.jpg"  className="w-full" alt="" />
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left- top-1/3 lg:left-1/3 lg:top-1/2">
          <h2 className="text-xl lg:text-5xl">Ahmed's Photography</h2>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/3 lg:left-1/4 top-2/3">
          <p className="text-xs lg:text-2xl">I am a professional photgrapher and  <br /> The best one you will find ever.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/F40DY2v/gv-Q9-Nh-QP8wbb-M32j-Xy4-V3j-min.jpg"  className="w-full" alt="" />
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left- top-1/3 lg:left-1/3 lg:top-1/2">
          <h2 className="text-xl lg:text-5xl">Ahmed's Photography</h2>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/3 lg:left-1/4 top-2/3">
          <p className="text-xs lg:text-2xl">I am a professional photgrapher and  <br /> The best one you will find ever.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/cD3Bw8R/car3.jpg"  className="w-full" alt="" />
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left- top-1/3 lg:left-1/3 lg:top-1/2">
          <h2 className="text-xl lg:text-5xl">Ahmed's Photography</h2>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/3 lg:left-1/4 top-2/3">
          <p className="text-xs lg:text-2xl">I am a professional photgrapher and  <br /> The best one you will find ever.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch"  className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
