import React from 'react';
import PageHeader from '../../Shared/PageHeader/PageHeader';
import AllProducts from '../AllProdcuts/AllProducts';

const Explore = () => {
    return (
        <div>
            <PageHeader page="All products"></PageHeader>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Explore;