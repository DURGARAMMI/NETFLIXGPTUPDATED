import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Header from './Header'

const Browse = () => {


    return (
        <div className='flex w-screen justify-between'>
            <div>
                <Header />
            </div>
        </div>
    )
}

export default Browse