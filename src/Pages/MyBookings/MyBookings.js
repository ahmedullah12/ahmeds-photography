import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import axios from 'axios';
import PaymentModal from '../../components/PaymentModal';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AddReviewModal from '../../components/AddReviewModal';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [currentBookingId, setCurrentBookingId] = useState('')
    const {data: bookings, isLoading, refetch} = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async() => {
            const res = await axios.get(`https://assignment-11-server-side-wine.vercel.app/bookings?email=${user?.email}`);
            const data = await res.data;
            return data;
        }
    });

    const handleRemoveBooking = (id) => {
        axios.delete(`https://assignment-11-server-side-wine.vercel.app/booking?id=${id}`)
        .then(res => {
            if(res.status === 200){
                toast.success("Booking cancelled");
                refetch();
            }
        })
        .catch(err => console.log(err));
    } 

    if(bookings?.length === 0){
        return <p className='text-center text-2xl mt-2 md:mt-3 lg:mt-5'>You haven't booked any products</p>
    }

    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div className='my-6'>
            <p className=' mb-4 text-2xl text-center font-bold'>My Bookings</p>
            <div className='flex justify-end mb-4'>
                 <Link className='btn btn-warning btn-sm text-white rounded' to="/my-reviews">My Reviews</Link>
            </div>
            <div className="">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                
                                <td className="max-w-xs  whitespace-normal break-words text-xs md:text-base">{booking.serviceName}</td>
                                <td>
                                    {
                                        booking.paid ? 
                                        (
                                            booking.isReviewed && booking.isReviewed === true ?
                                            <span className='text-primary'>Reviewed</span>
                                            :
                                        <label htmlFor= "review-modal"
                                         onClick={() => setCurrentBookingId(booking._id)}
                                         className='btn btn-xs btn-success rounded text-white'
                                         >Add Review
                                        </label> 

                                        )
                                        :
                                        (<button onClick={() => handleRemoveBooking(booking._id)}
                                        className='btn btn-xs btn-error text-white rounded'>
                                            Cancel
                                        </button>)
                                    }
                                </td>
                                <td>
                                    {
                                        
                                    booking.price && !booking.paid &&
                                     <label onClick={() => setCurrentBookingId(booking._id)} htmlFor={`my-modal-${booking._id}`}
                                      className='btn btn-xs btn-primary text-white rounded'
                                      >Pay
                                     </label>
                                    }
                                    {
                                        booking.price && booking.paid && 
                                        <span className='text-primary'>Paid</span>
                                    }
                                </td>
                              </tr>) 
                        }
                    
                    </tbody>
                </table>
                <PaymentModal refetch={refetch} id={currentBookingId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></PaymentModal>
            </div>
                <AddReviewModal refetch={refetch} id={currentBookingId} isModalOpen={reviewModalOpen} setIsModalOpen={setReviewModalOpen}></AddReviewModal>
        </div>

    );
};

export default MyBookings;