import React from 'react';

const AddService = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.serviceName.value;
        const image = form.serviceImage.value;
        const description = form.serviceDescription.value;
        const price = form.servicePrice.value;
        console.log(name, image, description, price);

        const service = {
            title: name,
            description: description,
            image: image,
            price: price
        }
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Service added successfully')
            }
        })
    }
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-center'>You can add services. You will need to to give data in the form below to add a service.</h2>
            <form onSubmit={handleSubmit} className='p-10'>
                <div className='mb-3'>
                    <label className='text-lg'>Service Name:</label>
                    <br />
                    <input className='w-1/2 h-10 mt-3  px-6 border border-1 rounded-lg' type="text" name="serviceName" id="" required />
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Image URL:</label>
                    <br />
                    <input className='w-1/2 h-10 mt-3  px-6 border border-1 rounded-lg' type="text" name="serviceImage" id="" required />
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Description:</label>
                    <br />
                    <textarea className='mt-3 p-5 border border-1 rounded-lg' name="serviceDescription" id="" required cols="80" rows="10"></textarea>
                </div>
                <div className='mb-3'>
                    <label className='text-lg'>Service Price:</label>
                    <br />
                    <input className='w-1/2 h-10 mt-3 px-6 border border-1 rounded-lg' type="text" name="servicePrice" id="" required />
                </div>
                <div className='ml-60'>
                    <button className='btn btn-accent rounded' type='submit'>Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;