import React from "react";

const PhotoCollection = () => {
  return (
    <div>
        <h2 className="my-10 text-center text-xl lg:text-3xl">Some photo from my  collection</h2>
      <div className="carousel rounded-box">
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/n8ZP50X/65b743cb3fcf0e32690826bfefc6a63c.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/cQkJQ2Q/Aqua-Lola-Photography-021.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/c3R2Wps/Best-Haldi-Candid-Photography-In-hyderabad.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/yYW8qb9/gv-Q9-Nh-QP8wbb-M32j-Xy4-V3j-min.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/4RqWLqr/maxresdefault.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src="https://i.ibb.co/7Yv1LyN/Shoot-In-The-Rain21.jpg" alt="Burger" />
        </div>
        <div className="w-1/2 lg:w-1/4 mr-4 carousel-item">
          <img src= "https://i.ibb.co/yYW8qb9/gv-Q9-Nh-QP8wbb-M32j-Xy4-V3j-min.jpg" alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollection;
