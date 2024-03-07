import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();



    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                // navigate('/')
            })
            .catch((error) => {
                // An error happened.
                // navigate('/errorPage')
            });
    };

    useEffect(() => {
        // Navigation - everything will be taken care by this function
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // ubsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleGptSeach = () => {
        //toggle GPT search
        dispatch(toggleGptSearchView());
    }


    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img
                alt="bg"
                className="w-44"
                src={LOGO}
            />
            {user && (
                <div className="relative w-full flex items-center justify-end">
                    <button className="bg-red-500 p-3 rounded-md mr-2 text-white" onClick={handleGptSeach}>GPT Search</button>
                    <img
                        className="w-12 h-12 flex mr-2 rounded-md object-fill"
                        src={user?.photoURL}
                        alt="logo"

                    />
                    <button onClick={handleSignOut} className="text-white font-bold">
                        (sign out)
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
