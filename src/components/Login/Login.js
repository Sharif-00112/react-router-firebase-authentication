import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    //destructuring hooks
    const {signInUsingGoogle, signInUsingGithub, signInUsingFacebook, signInUsingTwitter, user} = useFirebase();
    
    return (
        <div>
            { !user.displayName ? <h3 className='pt-5'>User Login</h3> 
            :
            <h3 className='pt-5'>Welcome, <span className='text-success'>{user.displayName}</span></h3>
            }

            <hr className='w-25 mx-auto'/>

            { !user.email ?
                <div className="">
                    <form action="">
                        <input type="email" placeholder='Email'/>
                        <br />
                        <input type="password" placeholder='Password'/>
                        <br />
                        <input type="submit" value='Login'/>
                    </form>
                    
                    <p className='m-4'>Or</p>

                    <button onClick={signInUsingGoogle} className='btn btn-danger p-2 m-3'>Google Login</button>

                    <button onClick={signInUsingFacebook} className='btn btn-primary p-2 m-3'>Facebook Login</button>

                    <button onClick={signInUsingGithub} className='btn btn-dark p-2 m-3'>GitHub Login</button>

                    <button onClick={signInUsingTwitter} className='btn btn-info p-2 m-3'>Twitter Login</button>

                    <br />
                    <button className='btn btn-success p-2 m-3'><Link className='text-decoration-none text-white' to="/register">New User? Click to Register!</Link></button>
                </div>
                :
                <div className="mb-5">
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }


            
        </div>
    );
};

export default Login;