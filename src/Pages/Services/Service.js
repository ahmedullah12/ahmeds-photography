import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, title, image, price, description} = service
    return (
        <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-80 h-52 mt-10 rounded"  src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} 
        </h2>
        <p>{description.slice(0, 100)} ...</p>
        <p className="text-orange-600">Price: {price}</p>
        <Link to={`/services/${_id}`}>
            <button className="w-3/4 mt-3 ml-20 btn btn-secondary">More Details <BsArrowRight className="inline ml-4"></BsArrowRight></button>
        </Link>
      </div>
    </div>
    );
};

export default Service;