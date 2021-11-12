import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import PageHeader from '../../Shared/PageHeader/PageHeader';
import AllProducts from '../AllProdcuts/AllProducts';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <PageHeader page="All products"></PageHeader>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Explore;