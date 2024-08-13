import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignIn,setisSignIn] = useState(false);
    const navigate = useNavigate();
    
    const toggleSigninForm = () => {
        setisSignIn(!isSignIn);
    };

    const handlebuttonClick = () => {
        navigate("/browse");
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/234/092/small_2x/world-environment-day-photo.jpg" alt="background" className="w-full h-screen opacity-80"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-2/5 p-8 mx-auto left-0 right-0 my-20 text-black flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-4xl p-6">
                        {isSignIn ? "Sign In":"Sign Up"}
                    </h1>
                </div>
                {!isSignIn && 
                    <div>
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            className="mb-4 p-2 w-full bg-zinc-500 opacity-30 rounded-lg placeholder-black"
                        />
                    </div>
                }
                <label>Email Adress</label>
                <input 
                    type="email" 
                    className="mb-4 p-2 w-full bg-zinc-500 opacity-30 rounded-lg placeholder-black"
                />
                <label>Password</label>
                <input 
                    type="password"  
                    className="mb-4 p-2 w-full  bg-zinc-500 opacity-30 rounded-lg"
                />
                {isSignIn && 
                    <label className="flex gap-1">
                        <input type="checkbox"/>
                        Remember me
                    </label>
                }
                <button className="my-4 p-2 w-1/2 bg-[#e2b808] opacity-85 rounded-lg font-semibold hover:opacity-100" onClick={handlebuttonClick}>
                    {isSignIn ? "Sign in now":"Sign up now"}
                </button>
                <p 
                    className="my-4 cursor-pointer" 
                    onClick={toggleSigninForm}>
                        {isSignIn ? "Not Registered? Sign Up Now":"Already Registered? Sign In Now"}
                </p>
        </form>
        </div>
    )
}

export default Login;
