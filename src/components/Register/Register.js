import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3 className='pt-5'>New user Registration</h3> <hr className='w-25 mx-auto'/>

            <form action="">
                <input type="text" placeholder='Name'/>
                <br />
                <input type="email" placeholder='Email'/>
                <br />
                <input type="password" placeholder='Password'/>
                <br />
                <input type="password" placeholder='Repeat Password'/>
                <br />
                <input type="submit" value='Register'/>
            </form>
            <br />
            <button className='btn btn-success p-2 m-3'><Link className='text-decoration-none text-white' to="/login">Already registered? Click to Login!</Link></button>

        </div>
    );
};

export default Register;