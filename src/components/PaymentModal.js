import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentModal = ({id, isModalOpen, setIsModalOpen, refetch}) => {
    const [booking, setBooking] = useState({});


    useEffect(() => {
        axios.get(`https://assignment-11-server-side-wine.vercel.app/booking/${id}`)
        .then(res => {
            setBooking(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[id])

    return (
        <div>
            <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" checked={isModalOpen}
                    onChange={() => setIsModalOpen(!isModalOpen)}
                />
                <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
                    <label className="modal-box">
                        <div className='relative'>
                            <button
                                type="button"
                                className='text-2xl absolute top-0 right-0'
                                aria-label="Close"
                                onClick={() => setIsModalOpen(false)}
                            ><IoClose /></button>
                            <p className='text-lg font-bold'>Payment for: {booking.serviceName}</p>
                            <p>Please pay {booking.price}$ for your service.</p>
                            <div>
                            <Elements stripe={stripePromise}>
                                <CheckOutForm refetch={refetch} booking={booking}></CheckOutForm>
                            </Elements>
                            </div>

                        </div>
                    </label>
                </label>
        </div>
    );
};

export default PaymentModal;