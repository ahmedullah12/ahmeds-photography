import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Myreview from './MyReview';
import { useQuery } from 'react-query';

const MyReviews = () => {
    const {user} = useContext(AuthContext)




    const {data: reviews = [], refetch} = useQuery({
        queryKey: ["review", user?.email],
        queryFn: async() => {
            const res = await fetch(`https://assignment-11-server-side-wine.vercel.app/reviews?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete your review');
        if(proceed){
            fetch(`https://assignment-11-server-side-wine.vercel.app/reviews/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    refetch();
                }
                
            })
        }
    }
    
    return (
        <div className='mt-4'>
            <Helmet>
                <title>My Reviews -Ahmed's Photography</title>
            </Helmet>
            <h1 className='text-center text-2xl font-bold mb-3'>Here you see all your reviews you added.</h1>
            {
             
                <div className='bg-white p-4'>
                    
                    {
                        reviews.length ? (
                            reviews.map(rev => <Myreview key={rev._id} rev={rev} handleDelete={handleDelete} refetch={refetch}></Myreview>)
                        ) : (
                            <p className='text-center text-sm lg:text-xl font-semibold'>
                                You haven't added any review.
                            </p>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default MyReviews;