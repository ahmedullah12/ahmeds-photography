import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/limited-services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[setServices])
    return (
        <div>
            <h2>My Services</h2>
            <p>These are are the photography services I provide. You can select from these servies</p>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;