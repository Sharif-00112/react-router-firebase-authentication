import React from 'react';
import './Checkout.css'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
 
const Checkout = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
    
    };

    return (
        <div className=''>
            <h3 className='pt-5'>Checkout and Shipping</h3> 
            <hr className='w-25 mx-auto'/>

            <form className='shipping-form m-4' onSubmit={handleSubmit(onSubmit)}>

            <input placeholder='Your Name' defaultValue={user.displayName} {...register("name")} />
            <input placeholder='your.email@example.com' defaultValue={user.email} {...register("email", { required: true })} />
            <input placeholder='Short Address' defaultValue="" {...register("address", { required: true })} />
            <input placeholder='Phone no' defaultValue="" {...register("phone", { required: true })} />

            {errors.email && <span className='error'>This field is required</span>}
            
            <input type="submit" />
            </form>

        </div>
    );
};

export default Checkout;