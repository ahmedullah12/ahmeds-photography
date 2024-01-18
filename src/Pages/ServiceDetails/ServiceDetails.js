import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceReview from './ServiceReview';
import { Helmet } from 'react-helmet-async';
import { useLayoutEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import BookingModal from '../../components/BookingModal';
import StarRatings from 'react-star-ratings';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {_id, title, image, price, rating} = service;
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const maxDescriptionLength = 150;

    const sumOfRatings = rating && rating.length > 0
    ? rating.reduce((acc, cur) => acc + cur, 0)
    : 0;

  // Calculate the average rating
  const averageRating = rating && rating.length > 0
    ? sumOfRatings / rating.length
    : 0;
    const fullRatingString = averageRating.toFixed(1);
    const fullRating = parseFloat(fullRatingString);

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    useLayoutEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);



    const {data: reviews = []} = useQuery({
        queryKey: ["reviews"],
        queryFn: async() => {
            const res = await axios.get(`https://assignment-11-server-side-wine.vercel.app/service-reviews/${_id}`);
            const data = await res.data;
            return data;
        }
    });


    
    return (
        <div className='mt-10'>
            <Helmet>
                <title>Service Details -Ahmed's Photography</title>
            </Helmet>
            <div className=' w-full lg:w-3/4 bg-white px-2 md:px-10 py-6  mx-auto rounded'>
                
                <div className='block md:flex lg:flex justify-center  gap-5'>
                    <PhotoProvider>
                        <PhotoView src={service.image}>
                            <img className=' w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded my-5' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='mt-5'>
                        <p><span className='font-bold'>Service name:</span> {title}</p>
                        <p>
                            <span className='font-bold mr-4'>Description:</span>
                            {isMobile
                                ? isDescriptionExpanded
                                    ? service.description
                                    : `${service.description.slice(0, maxDescriptionLength)}${
                                        service.description.length > maxDescriptionLength ? '...' : ''
                                    }`
                                : service.description}
                            {isMobile && service.description.length > maxDescriptionLength && (
                                <button
                                    className='text-blue-500 hover:underline focus:outline-none'
                                    onClick={toggleDescription}
                                >
                                    {isDescriptionExpanded ? 'See Less' : 'See More'}
                                </button>
                            )}
                        </p>
                        <div className='flex items-center gap-2'>
                            <p className='mt-2 font-bold'>
                                <span>
                                    Rating: {fullRating} <span>({rating.length})</span>
                                </span>
                            </p>
                            <StarRatings
                            rating={fullRating}
                            starRatedColor="gold"
                            numberOfStars={5}
                            name='rating'
                            starDimension='20px'
                            starSpacing='2px'
                            ></StarRatings>
                        </div>
                        <p className='mt-2 font-bold'><span className=' text-orange-600'>Price:</span> {price}$</p>
                        <div className='flex justify-center mt-4 md:mt-0'>
                            <label htmlFor={`my-modal-${_id}`} className='btn rounded btn-warning text-white'>Book Now</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal title={title} id={_id} price={price} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></BookingModal>

            
            <div className='bg-white my-10 p-2 md:p-6 lg:p-10'>
                <p className='mb-4 text-xl font-semibold'>Reviews of this service: </p>
                {
                    reviews && reviews.length > 0 ?
                    reviews.map(rev => <ServiceReview key={rev._id} rev={rev}></ServiceReview>) :
                    <p>No reviews added to this service.</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;