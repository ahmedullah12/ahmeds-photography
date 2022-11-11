import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Helmet} from 'react-helmet-async';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setServices(data)
        });
    },[])
    return (
        
        <div className='mt-10 text-center '>
            <Helmet>
                <title>Services -Ahmed's Photography</title>
            </Helmet>
            <h2 className='text-4xl text-orange-400 font-bold'>My All Services</h2>
            <p className='text-lg my-4'>These are  the all photography services I provide. You can select what you like from this services.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start'>
                {
                    loading ?
                    <div className="mx-96 my-60  radial-progress" style={{"--value":70}}>70%</div>
                    :
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;