import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';
import '../../components/ReviewModal.css'
import toast from 'react-hot-toast';


const Myreview = ({rev, handleDelete, refetch}) => {
    const {_id, serviceName, reviewText, rating} = rev;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRating, setNewRating] = useState(0);
    const [hover, setHover] = useState(0);
    

    const handleUpdateReview  = (event) => {
        event.preventDefault();
        const form = event.target;
        const newReview = event.target.newReview.value;
        const newRev = {
            reviewText: newReview,
            rating: newRating,
        }
        
        fetch(`https://assignment-11-server-side-wine.vercel.app/reviews/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRev)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                form.reset();
                toast.success("Review Updated");
                setIsModalOpen(false);
                refetch();
            }
            
        })
    }


    return (
        <div className=' lg:flex  gap-5 justify-between items-center bg-slate-100 my-10 px-4 md:px-10 py-2 md:py-3'>
            <div>
                <h2 className='text-sm md:text-lg mb-5 font-bold'>Service Name: {serviceName}</h2>
                <p className='text-sm md:text-base'>Your Review: {reviewText}</p>
                <div className="flex gap-2 items-center">
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
            <div className='my-4'>
                
               <div className='flex flex-col md:flex-row gap-3'>
               <label htmlFor={`my-modal-${_id}`}  className='btn btn-primary btn-sm rounded text-white'>Update Review</label>
                <button onClick={() => handleDelete(_id)}  className='btn btn-warning btn-sm rounded text-white'>Delete</button>
               </div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" checked={isModalOpen}
                    onChange={() => setIsModalOpen(!isModalOpen)}
                />
                <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                    <label className="modal-box">
                    <div className="star-rating mb-5">
                            <p className='mb-2'>Select Service Rating:</p>
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || newRating) ? "on" : "off"}
                                    onClick={() => setNewRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(newRating)}
                                >
                                    <FaStar size={20}/>
                                </button>
                                );
                            })}
                        </div>

                        <form onSubmit={handleUpdateReview}>
                            <label>Add updated review: </label> <br />
                            <textarea className='my-3 p-4 rounded resize-none w-[250px] h-[120px] md:w-[400px] md:h-[200px]'
                             name="newReview" id="" defaultValue={reviewText} required></textarea> <br />
                            <button type='submit' className='btn btn-primary rounded text-white mt-3'>add</button> 
                        </form>
                    </label>
                </label>
                

            </div>
        </div>
    );
};

export default Myreview;