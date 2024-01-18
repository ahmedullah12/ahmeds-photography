import React, { useEffect, useState } from 'react';
import './ReviewModal.css';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';

const AddReviewModal = ({id, isModalOpen, setIsModalOpen, refetch}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const [booking, setBooking] = useState({});


    useEffect(() => {
        axios.get(`https://assignment-11-server-side-wine.vercel.app/booking/${id}`)
        .then(res => {
            setBooking(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[id]);

    
    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.review.value;
        const fullReview = {
            rating,
            reviewText,
            name: booking.name,
            email: booking.email,
            serviceName: booking.serviceName,
            serviceId: booking.serviceId,
            bookingId: booking._id,
        };

        console.log(fullReview);

        axios.post('https://assignment-11-server-side-wine.vercel.app/reviews', fullReview)
        .then(res => {
            if(res.status === 200){
                toast.success("Review Added");
                setIsModalOpen(false);
                form.reset();
                refetch();
            };
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <input type="checkbox" id='review-modal' className="modal-toggle" checked={isModalOpen}
                    onChange={() => setIsModalOpen(!isModalOpen)}
                />
                <label htmlFor='review-modal' className="modal cursor-pointer">
                    <label className="modal-box">
                        <p className='font-bold mb-2'>ServiceName: {booking.serviceName}</p>
                        <div className="star-rating mb-5">
                            <p className='mb-2'>Select Service Rating:</p>
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || rating) ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                >
                                    {/* <span className="star">&#9733;</span> */}
                                    <FaStar size={20}/>
                                </button>
                                );
                            })}
                        </div>

                        <form onSubmit={handleAddReview}>
                            <label>Add written review: </label> <br />
                            <textarea className='p-4 rounded resize-none' name="review" id="" cols="40" rows="5" required></textarea> <br />
                            <button type='submit' className='btn btn-primary rounded text-white mt-3'>add</button> 
                        </form>
                    </label>
                </label>
        </div>
    );
};

export default AddReviewModal;