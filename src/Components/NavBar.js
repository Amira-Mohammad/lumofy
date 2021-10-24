import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const userName = localStorage.getItem('userName');
    console.log('userName from nav', userName);

    return (
        <nav className="navbar bg-secondary text-white ">
            <div className="container-fluid d-flex">



                <div className="navbar-nav fw-bold fs-3">
                    Cousera
                </div>

                <div>Hello {userName} </div>
            </div>
        </nav>
    );
};

export default NavBar;