import React from 'react';

const ServiceReview = ({rev}) => {
    console.log(rev)
    const {userName, userPhoto, review} = rev;
    return (
        <div className='bg-slate-100 p-4 my-10  lg:flex gap-6 items-center text-center lg:text-start'>
            <img className='w-10 h-10 lg:w-24 lg:h-24 mx-auto lg:mx-0 rounded-full' src={userPhoto} alt="" />
            <div>
                <h4 className='text-2xl font-semibold'>{userName}</h4>
                <p><span className='font-semibold'>Review:</span> {review}</p>
            </div>
        </div>
    );
};

export default ServiceReview;