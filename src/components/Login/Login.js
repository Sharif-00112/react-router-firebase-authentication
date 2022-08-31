import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3 className='pt-5'>Login here</h3> 
            <hr className='w-25 mx-auto'/>

            <form action="">
                <input type="email" placeholder='Email'/>
                <br />
                <input type="password" placeholder='Password'/>
                <br />
                <input type="submit" value='Login'/>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;