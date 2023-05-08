import React from 'react';
import Carousel from './Carousel';
import Training from './Training';
import FormButton from './FormButton';


const Home = () => {
    return (
        <div className='mb-52'>
            <Carousel></Carousel>
            <Training></Training>
            <FormButton></FormButton>
        </div>
    );
};

export default Home;