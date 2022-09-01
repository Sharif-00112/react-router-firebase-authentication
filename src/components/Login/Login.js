import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    //destructuring hooks
    const {signInUsingGoogle, user} = useFirebase();
    return (
        <div>
            { !user.displayName ? <h3 className='pt-5'>Login here</h3> 
            :
            <h3 className='pt-5'>Welcome, <span className='text-success'>{user.displayName}</span></h3>
            }

            <hr className='w-25 mx-auto'/>

            <form action="">
                <input type="email" placeholder='Email'/>
                <br />
                <input type="password" placeholder='Password'/>
                <br />
                <input type="submit" value='Login'/>
            </form>
            
            <button onClick={signInUsingGoogle} className='btn btn-danger p-2 m-3'>Google Login</button>
            <button className='btn btn-primary p-2 m-3'>Facebook Login</button>

            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;