import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://assignment-11-server-side-wine.vercel.app/limited-services')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setServices(data)
        });
    },[setServices]);



    return (
        <div className='mt-10 text-center '>
            <h2 className='text-4xl text-orange-400 font-bold'>My Services</h2>
            <p className='text-lg my-4'>These are  the latest photography services I provide. You can see all the service by clicking see all button.</p>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start'>
                {   
                    loading ?
                    <div>
                        <span className="loading loading-spinner loading-xs"></span>
                    </div>
                    :
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div>
            <Link to='/services'><button className=' mt-5 px-10 items-center rounded text-white btn btn-warning'>See All</button></Link>
            </div>
        </div>
    );
};

export default Services;