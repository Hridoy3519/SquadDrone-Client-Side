import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products/>
        </div>
    );
};

export default Home;