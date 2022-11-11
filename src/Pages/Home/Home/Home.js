import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import Banner from '../Banner/Banner';
import PhotoCollection from '../PhotoCollection/PhotoCollection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home -Ahmed's Photography</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <PhotoCollection></PhotoCollection>
            <About></About>
        </div>
    );
};

export default Home;