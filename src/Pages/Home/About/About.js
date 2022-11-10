import React from 'react';

const About = () => {
    return (
        <div className="hero my-20 bg-white">
            <div className="hero-content w-2/3  flex-col lg:flex-row">
                <img src="https://i.ibb.co/2qcczJQ/photographer.jpg" className="w-full lg:w-2/4 rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 className="text-5xl font-bold">Ahmed's Photography</h1>
                <p className="py-6">
                    <span className='text-xl font-semibold'>Hi... My name is Ahmed Ullah</span>
                    <br />
                    I am a professional photographer.Photography is my hobby, my passion.I have been doing professional photography for like 5-6 years.It gives me mush joy in life and also enough money to live my life happily.
                </p>
                </div>
            </div>
        </div>
    );
};

export default About;