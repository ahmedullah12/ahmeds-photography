import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div className=''>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-4xl font-bold'>Service name: {service.title}</h1>
                <PhotoProvider>
                    <PhotoView src={service.image}>
                        <img className='w-1/3 h-1/3 mx-auto rounded my-5' src={service.image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <p><span className='font-bold mr-4'>Description:</span>{service.description}</p>
                <p className='mt-4 font-bold'><span className=' text-orange-600'>Price:</span> {service.price}</p>


            </div>
        </div>
    );
};

export default ServiceDetails;