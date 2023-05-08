import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='mt-20 bg-[#1A1919] text-[] md:px-7 pb-20 lg:px-28 pt-4 text-white'>
                <div className='md:grid grid-cols-3 p-4 md:pt-24 mb-5 gap-5'>
                    <div>
                        <h3 className='text-3xl font-medium mb-4 text-[#f87272]'>ABM Driving</h3>
                        <p className='opacity-75 md:w-3/4'>We are a driving school with experienced instructors offering comprehensive courses for beginner and experienced drivers.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 col-span-2 '>
                        <div>
                            <h4 className=' text-xl font-semibold mb-3'>Explore</h4>
                            <p className='opacity-75'>Home</p>
                            <p className='opacity-75'>Blog</p>
                            <p className='opacity-75'>Training</p>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold mb-3'>Follow</h4>
                            <p className='opacity-75'>Instagram</p>
                            <p className='opacity-75'>Facebook</p>
                            <p className='opacity-75'>Twitter</p>
                            <p className='opacity-75'>Linkedin</p>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold mb-3'>Legal</h4>
                            <p className='opacity-75'>Terms</p>
                            <p className='opacity-75'>Privacy</p>
                        </div>

                        <div>
                            <h4 className='text-xl font-semibold mb-3'>Contact</h4>
                            <p className='opacity-75'>524 Broadway</p>
                            <p className='opacity-75'> NYC +1 777 - 978 - 5570</p>
                        </div>
                    </div>
                </div>
                <p className='text-center mb-4'> © 2023 ABM Driving. All rights reserved.</p>
                <hr className="border-b border-gray-200"></hr>
            </footer>
        </div>
    );
};

export default Footer;