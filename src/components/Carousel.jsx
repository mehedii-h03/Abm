import React from 'react';
import image_1 from '../assets/images/image_1.jpg'
import image_2 from '../assets/images/image_2.jpg'
import image_3 from '../assets/images/image_3.jpg'

const Carousel = () => {
    return (
        <div className='lg:px-28 mx-auto'>
            <div className="carousel">
                {/* slide 1 */}
                <div id="slide1" className="carousel-item relative lg:h-[620px] w-full">
                    <img src={image_1} className="w-full" />
                    {/* image overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div>
                            <h2 className="text-white lg:mb-6 text-2xl lg:text-6xl line font-bold text-center">Gear Up for Success! <br /> </h2>
                            <h2 className='text-white text-2xl lg:text-6xl line font-bold text-center'>Learn to Drive with
                                <span className='text-[#f87272]'> ABM</span></h2>
                            <div className='mt-4 text-center p-4 '>
                                <button className="btn btn-info lg:py-2 lg:px-6 lg:text-xl text-white lg:mr-5 mr-3">Enroll</button>
                                <button className="btn lg:px-6 lg:text-xl btn-outline btn-error">Contact</button>
                            </div>
                        </div>
                    </div>
                    {/* navigate btn */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide 2 */}
                <div id="slide2" className="carousel-item relative lg:h-[620px] w-full">
                    <img src={image_2} className="w-full" />
                    {/* image overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div>
                            <h2 className="text-white lg:mb-6 text-2xl lg:text-6xl line font-bold text-center">Gear Up for Success! <br /> </h2>
                            <h2 className='text-white text-2xl lg:text-6xl line font-bold text-center'>Learn to Drive with
                                <span className='text-[#f87272]'> ABM</span></h2>
                            <div className='mt-4 text-center p-4 '>
                                <button className="btn btn-info lg:py-2 lg:px-6 lg:text-xl text-white lg:mr-5 mr-3">Enroll</button>
                                <button className="btn lg:px-6 lg:text-xl btn-outline btn-error">Contact</button>
                            </div>
                        </div>
                    </div>
                    {/* navigate btn */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide 3 */}
                <div id="slide3" className="carousel-item relative lg:h-[620px] w-full">
                    <img src={image_3} className="w-full" />
                    {/* image overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div>
                            <h2 className="text-white lg:mb-6 text-2xl lg:text-6xl line font-bold text-center">Gear Up for Success! <br /> </h2>
                            <h2 className='text-white text-2xl lg:text-6xl line font-bold text-center'>Learn to Drive with
                                <span className='text-[#f87272]'> ABM</span></h2>
                            <div className='mt-4 text-center p-4 '>
                                <button className="btn btn-info lg:py-2 lg:px-6 lg:text-xl text-white lg:mr-5 mr-3">Enroll</button>
                                <button className="btn lg:px-6 lg:text-xl btn-outline btn-error">Contact</button>
                            </div>
                        </div>
                    </div>
                    {/* navigate btn */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;