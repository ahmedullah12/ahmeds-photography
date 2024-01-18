import axios from 'axios';
import React, { useContext } from 'react';
import { IoClose } from "react-icons/io5";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({isModalOpen, setIsModalOpen, id, title, price}) => {
    const {user} = useContext(AuthContext)
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        
        const booking = {
            name,
            email,
            phone,
            serviceId: id,
            serviceName: title,
            price,
        };

        axios.post("https://assignment-11-server-side-wine.vercel.app/booking", booking)
        .then(res => {
            if(res.data.acknowledged){
                toast.success("Booking Confirmed");
                setIsModalOpen(false);
                form.reset();
            }
            else{
                toast.error(res.data.message)
            };
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" checked={isModalOpen}
                onChange={() => setIsModalOpen(!isModalOpen)}
            />
            <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
                <label className="modal-box">
                    <form onSubmit={handleBooking} className="relative">
                            <button
                                type="button"
                                className='text-2xl absolute top-0 right-0'
                                aria-label="Close"
                                onClick={() => setIsModalOpen(false)}
                            ><IoClose /></button>

                        <label className='font-bold text-lg' htmlFor="">Booking for: {title}</label> <br />
                        <label htmlFor="" className='font-bold'>Price: {price}$</label>
                        <div className='mt-3 mb-2'>
                            <label>Your Name:</label> <br />
                            <input defaultValue={user?.displayName} name='name' type="text" placeholder="Type here" className="mt-2 input input-bordered rounded w-full max-w-xs" disabled/>
                        </div>
                        <div className='mb-2'>
                            <label>Your Email:</label> <br />
                            <input defaultValue={user?.email} name="email" type="text" placeholder="Type here" className="mt-2 input input-bordered rounded w-full max-w-xs" disabled/>
                        </div>
                        <div className='mb-2'>
                            <label>Your Phone:</label> <br />
                            <input name="phone" type="text" placeholder="Type here" className="mt-2 input input-bordered rounded w-full max-w-xs" />
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button type='submit' className='btn btn-warning text-white rounded'>Book</button>
                        </div> 
                    </form>
                </label>
            </label>
        </div>
    );
};

export default BookingModal;