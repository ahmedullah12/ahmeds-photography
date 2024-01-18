import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.serviceImage.value;
        const description = form.serviceDescription.value;
        const price = form.servicePrice.value;
        console.log(serviceName, image, description, price);

        const service = {
            name: user?.displayName,
            email: user?.email,
            title: serviceName,
            description: description,
            image: image,
            price: price
        }
        fetch('https://assignment-11-server-side-wine.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Service added successfully')
                form.reset();
            }
        })
    }
    return (
        <div className='mt-5'>
            <Helmet>
                <title>Add Service -Ahmed's Photography</title>
            </Helmet>
            <h2 className='text-xl md:text-2xl font-bold text-center'>Fill all the fields to add the service.</h2>
            <form onSubmit={handleSubmit} className='p-3 md:p-10'>
                <div className='mb-3'>
                    <label className='text-lg'>Service Name:</label>
                    <br />
                    <input className='w-full md:w-1/2 h-10 mt-3  px-6 border border-1 rounded-lg' type="text" name="serviceName" id="" required />
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Image URL:</label>
                    <br />
                    <input className='w-full md:w-1/2 h-10 mt-3  px-6 border border-1 rounded-lg' type="text" name="serviceImage" id="" required />
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Description:</label>
                    <br />
                    <textarea className='w-full md:w-1/2 h-[100px] md:h-[200px] mt-3 p-5 border border-1 rounded-lg' name="serviceDescription" id="" required></textarea>
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Price:</label>
                    <br />
                    <input className='w-full md:w-1/2 h-10 mt-3 px-6 border border-1 rounded-lg' type="number" name="servicePrice" id="" required />
                </div>
                <div className='mt-4 flex justify-center'>
                    <button className='btn btn-warning text-white rounded' type='submit'>Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;