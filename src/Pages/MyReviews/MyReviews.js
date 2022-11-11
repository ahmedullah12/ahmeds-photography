import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Myreview from './MyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[user?.email])

    

    const  handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel the order');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            })
        }
    };
    return (
        <div>
            <Helmet>
                <title>My Reviews -Ahmed's Photography</title>
            </Helmet>
            <h1 className='text-center text-2xl lg:text-3xl font-bold'>Here you see all your reviews you added.</h1>
            <p className='text-center text-sm lg:text-xl font-semibold'>You haven't added any review please go to service details page and add review</p>
            <div className='bg-white my-10 p-10'>
                {
                    reviews.map(rev => <Myreview key={rev._id} rev={rev} handleDelete={handleDelete}></Myreview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;