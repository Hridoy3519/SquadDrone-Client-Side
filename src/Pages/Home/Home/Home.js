import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products/>
            <Testimonials/>
        </div>
    );
};

export default Home;