import React from 'react';
import StarRatings from 'react-star-ratings';

const ServiceReview = ({rev}) => {
    
    const {reviewText, name, rating} = rev;
    return (
        <div className='bg-slate-100 p-4 mb-3'>
            <div className='flex items-center gap-3'>
                <p className='text-xl font-medium'>{name}</p>
            </div>
            <p className='mt-3'><span className='me-4 font-medium'>Review: </span>{reviewText}</p>
            <div className='flex gap-2'>
            <p>Rating: </p>
            <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                name='rating'
                starDimension='20px'
                starSpacing='2px'
                ></StarRatings>
            </div>
        </div>
    );
};

export default ServiceReview;