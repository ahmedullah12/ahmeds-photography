import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceReview from './ServiceReview';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [number, setNumber] = useState(0);

    const {_id,  title, image, price} = service

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const review = event.target.review.value;

        const reviewData = {
            serviceId: service._id,
            serviceTitle: title,
            serviceImage: image,
            userEmail: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            review: review,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Review added succesfully');
                
            }
        })

    }
    useEffect(()=> {
        fetch(`http://localhost:5000/service-reviews/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setNumber(number => number + 1)
            setReviews(data);
            
        })
    },[number, _id])
    return (
        <div className=''>
            <Helmet>
                <title>Service Details -Ahmed's Photography</title>
            </Helmet>
            <div className=' w-full lg:w-3/4 bg-white p-10 lg:p-20 mx-auto rounded'>
                <h1 className='text-4xl font-bold'>Service name: {title}</h1>
                <PhotoProvider>
                    <PhotoView src={service.image}>
                        <img className='w-2/3 h-1/3 mx-auto rounded my-5' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <p><span className='font-bold mr-4'>Description:</span>{service.description}</p>
                <p className='mt-4 font-bold'><span className=' text-orange-600'>Price:</span> {price}</p>
            </div>

            {
                user?.email ? 
                <>
                    <form onSubmit={handleReviewSubmit} className='mt-10 flex gap-6 items-center justify-center'>
                        <textarea className='p-5' name="review" id="" cols="90" rows="5"></textarea>
                        <button className='btn btn-primary'>Add Review</button>
                    </form>
                </>
                :
                <>
                    <p className='my-10 text-center text-orange-500 font-bold'>If you want to add a review please <Link className='link text-primary' to='/login'>login.</Link></p>
                </>
            }
            {
               
            }
            <div className='bg-white my-10 p-10'>
                {
                    reviews.map(rev => <ServiceReview key={rev._id} rev={rev}></ServiceReview>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;