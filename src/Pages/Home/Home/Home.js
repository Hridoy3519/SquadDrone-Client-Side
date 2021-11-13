import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutDrone from '../AboutDrone/AboutDrone';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products/>
            <AboutDrone/>
            <Testimonials/>
            <Footer />
        </div>
    );
};

export default Home;