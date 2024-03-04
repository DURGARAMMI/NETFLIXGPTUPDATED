import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Header = () => {
    const naviagate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            naviagate('/')
        }).catch((error) => {
            // An error happened.
            naviagate('/errorPage')
        });
    }
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img alt='bg'
                className='w-44'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
            {user && <div className='relative w-full flex items-center justify-end'>
                <img className='w-12 h-12 flex mr-2' src={user?.photoURL} alt="logo" />
                <button onClick={handleSignOut} className='text-white font-bold'>(sign out)</button>
            </div>}
        </div>
    )
}

export default Header