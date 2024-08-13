import { useRef, useState, useContext } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import UserActive from '../utils/userActiveContext';

const Login = () => {
    const [isSignIn,setisSignIn] = useState(false);
    const {setsignedIn} = useContext(UserActive);
    const [errorMessage,seterrorMessage] = useState(null);
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    
    const toggleSigninForm = () => {
        setisSignIn(!isSignIn);
    };

    const handlebuttonClick = () => {
        const message = checkValidData(email.current.value,password.current.value);
        seterrorMessage(message);
        if(message) return;

        if(!isSignIn){
            setsignedIn(true);
            navigate("/browse");
        }
        else{
            setsignedIn(true);
            navigate("/browse");
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/234/092/small_2x/world-environment-day-photo.jpg" alt="background" className="w-full h-screen opacity-80"/>
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className="absolute w-2/5 p-8 mx-auto left-0 right-0 mt-14 text-black flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-4xl p-6">
                        {isSignIn ? "Sign In":"Sign Up"}
                    </h1>
                </div>
                {!isSignIn && 
                    <div>
                        <label className="font-bold text-lg">Full Name</label>
                        <input 
                            type="text" 
                            className="mb-4 p-2 w-full  bg-gray-500 bg-opacity-30 rounded-lg text-black text-opacity-100"
                        />
                    </div>
                }
                <label className="font-bold text-lg">Email Address</label>
                <input 
                    ref={email}
                    type="email" 
                    className="mb-4 p-2 w-full  bg-gray-500 bg-opacity-30 rounded-lg text-black text-opacity-100"
                />
                <label className="font-bold text-lg">Password</label>
                <input 
                    ref={password}
                    type="password"  
                    className="mb-4 p-2 w-full  bg-gray-500 bg-opacity-30 rounded-lg text-black text-opacity-100"
                />
                {isSignIn && 
                    <label className="flex gap-1">
                        <input type="checkbox"/>
                        Remember me
                    </label>
                }
                {errorMessage && 
                    <p className="my-4 font-bold text-lg">
                        {errorMessage}
                    </p>
                }
                <button className="my-4 p-2 w-1/2 bg-[#e2b808] rounded-lg font-semibold" onClick={handlebuttonClick}>
                    {isSignIn ? "Sign in now":"Sign up now"}
                </button>
                <p 
                    className="my-4 cursor-pointer font-bold text-lg" 
                    onClick={toggleSigninForm}>
                        {isSignIn ? "Not Registered? Sign Up Now":"Already Registered? Sign In Now"}
                </p>
        </form>
        </div>
    )
}

export default Login;
