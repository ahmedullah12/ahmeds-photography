import React, { useEffect } from "react";
import {BsArrowRight} from "react-icons/bs"
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ service }) => {
    const {_id, title, image, price, description} = service;

    useEffect(() => {
      AOS.init({
          duration: "1500",
          delay: "500",
      });
  }, [])
  return (
    <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
      <figure>
      <PhotoProvider>
          <PhotoView src={image}>
          <img className="w-80 h-52 mt-10 rounded"  src={image} alt="Shoes" />
          </PhotoView>
      </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} 
        </h2>
        <p>{description.slice(0, 100)} ...</p>
        <p className="text-orange-600">Price: ${price} Per Day</p>
        <Link to={`/services/${_id}`}>
            <button className="w-3/4 mt-3 ml-20 btn btn-secondary">More Details <BsArrowRight className="inline ml-4"></BsArrowRight></button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
