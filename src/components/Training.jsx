import React from 'react';
import card_image_1 from '../assets/images/card_image_1.jpg'

const Training = () => {
    return (
        <div className='mt-10 lg:px-28'>

            <div className='mt-20 lg:px-28'>
                <h2 className='text-4xl font-bold text-center mb-10'>Behind-the-Wheel Training</h2>
                <div className='flex items-center flex-col-reverse lg:flex-row justify-between'>
                    <div className='px-2 lg:px-0'>
                        <h4 className='text-2xl font-semibold lg:mt-0 mt-6'>Behind the wheel training!</h4>
                        <p className='mt-4 lg:w-3/5 text-xl '>We are a driving school with experienced instructors offering comprehensive courses for beginner and experienced drivers. Our curriculum teaches safe and confident driving skills in a friendly and supportive environment. Join us to achieve your driving goals and become a responsible driver.</p>
                    </div>
                    <div className="relative transition duration-300 transform hover:scale-105 cursor-pointer">
                        <img
                            className="lg:w-[1400px] lg:h-[500px] object-cover"
                            src={card_image_1}
                        />
                        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl font-bold"><span className='text-[#f87272]'> ABM</span> Driving</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;