import React from 'react';
import AllProducts from '../AllProdcuts/AllProducts';
import ExploreBanner from '../ExploreBanner/ExploreBanner';

const Explore = () => {
    return (
        <div>
            <ExploreBanner/>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Explore;