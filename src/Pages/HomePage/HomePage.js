import React from 'react';
import About from './About/About';
import Home from './Home/Home';
import Reviews from './Reviews/Reviews';
const HomePage = () => {
    return (
        <div>
            {/* <h1>This is home.</h1> */}
            <Home></Home>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default HomePage;