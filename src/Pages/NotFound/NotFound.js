import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import PageHeader from '../Shared/PageHeader/PageHeader';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <PageHeader page="Not Found"></PageHeader>
            <Navigation/>
            <div className="not-found">
                <h1>404, Page Not Found!</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default NotFound;