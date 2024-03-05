import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { BACKGROUND_URL } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef();
    const email = useRef();
    const password = useRef();

    // const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        //validation
        // console.log(email.current.value, password.current.value);
        const message = checkValidateData(
            email.current.value,
            password.current.value
        );
        // console.log(message);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            // Profile updated!
                            // ...
                            // console.log(user)
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            // navigate('./browse')
                        })
                        .catch((error) => {
                            // An error occurred
                            // ...
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                    // ..
                });
        } else {
            //sign in logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user)
                    // ...
                    // navigate('./browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });
        }

        // sign in / sign up logic
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src={BACKGROUND_URL}
                    alt="netflix-logo"
                />
            </div>
            <form
                onClick={(e) => e.preventDefault()}
                className="top-12 absolute p-12 bg-black bg-opacity-[0.8] left-0 right-0 w-[35%] rounded-sm my-auto mx-auto flex justify-center flex-col items-center text-white"
            >
                <h2 className="text-3xl font-bold">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>

                {!isSignInForm && (
                    <input
                        type="text"
                        ref={name}
                        placeholder="Name"
                        className="p-4 m-4 w-full bg-gray-700"
                    />
                )}
                <input
                    type="text"
                    ref={email}
                    placeholder="Email Address"
                    className="p-4 m-4 w-full bg-gray-700"
                />

                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="p-4 m-4 w-full bg-gray-700"
                />
                <p className="text-red-400 mr-auto">{errorMessage}</p>
                <button
                    className="px-8 py-4 rounded-sm m-4 bg-red-500 w-full"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <div className="text-gray-400 mt-4 text-left mr-auto">
                    <h3 className="font-bold text-xl text-gray-400 mb-3">
                        New to Netflix?{" "}
                        <span
                            className="underline text-blue-200 cursor-pointer"
                            onClick={toggleSignInForm}
                        >
                            {isSignInForm
                                ? "Sign up now"
                                : "Already a Member? Sign In Now..."}
                        </span>
                        .
                    </h3>
                </div>
            </form>
        </div>
    );
};

export default Login;
