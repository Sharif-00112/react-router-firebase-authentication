import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => { 
    const{user, logout} = useAuth();
    return (
        <div className='navbar'>
            <div className="" id='page-name'>
                <Link to="/">React</Link>
            </div>
            <div className="navLinks">
                <Link to="/home">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/orders">My Orders</Link>
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