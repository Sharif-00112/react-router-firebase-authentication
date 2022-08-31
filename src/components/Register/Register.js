import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3 className='pt-5'>Register/ Sign up</h3> <hr className='w-25 mx-auto'/>

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
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Register;