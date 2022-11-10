import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {_id, title, image, price} = service

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const review = event.target.review.value;

        const reviewData = {
            serviceId: _id,
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
                alert('Review added succesfully')
            }
        })
    }
    return (
        <div className=''>
            <div className='w-3/4 bg-white p-0 lg:p-20 mx-auto rounded'>
                <h1 className='text-4xl font-bold'>Service name: {title}</h1>
                <PhotoProvider>
                    <PhotoView src={service.image}>
                        <img className='w-1/3 h-1/3 mx-auto rounded my-5' src={image} alt="" />
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
                    <p className='my-10 text-center text-orange-500 font-bold'>If you want to add a review please <Link to='/login'>login.</Link></p>
                </>
            }
        </div>
    );
};

export default ServiceDetails;