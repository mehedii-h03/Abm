import React from 'react';

const Header = () => {
    return (
        <div className="navbar lg:px-28 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="lg:text-3xl lg:pl-4 font-bold text-[#f87272] text-xl">ABM Driving</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a>Home</a></li>
                    <li>
                        <a>Lessons</a>
                    </li>
                    <li><a>Road Test</a></li>

                </ul>
            </div>
        </div>

    );
};

export default Header;