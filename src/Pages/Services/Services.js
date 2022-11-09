import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className='mt-10 text-center '>
            <h2 className='text-4xl text-orange-400 font-bold'>My All Services</h2>
            <p className='text-lg my-4'>These are  the all photography services I provide. You can select what you like from this services.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;