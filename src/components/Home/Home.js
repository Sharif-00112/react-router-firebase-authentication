import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Home = () => {
    const{user} = useFirebase();
    return (
        <div>
            <h3 className='pt-5'>Homepage</h3> <hr className='w-25 mx-auto'/>

            { user?.email && <button>Logout</button> }

        </div>
    );
};

export default Home;