import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => { 
    const{user, logout} = useFirebase();
    return (
        <div className='navbar'>
            <div className="" id='page-name'>
                <Link to="/home">React</Link>
            </div>
            <div className="navLinks">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="">
                <button className='btn btn-success btn-sm m-1'>
                    <Link to="/login">Login</Link>
                </button>

                { user?.email && <button onClick={logout} className='btn btn-danger btn-sm m-1'>
                    <a href="/login">Logout</a>
                </button> }
            </div>
        </div>
    );
};

export default Header;