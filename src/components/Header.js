import Logo from '../images/logo.jpeg';
import BG_IMG from '../images/bg-img.jpeg';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserActive from '../utils/userActiveContext';
import LoginPage from '../utils/signInContext';

const Header = () => {
    const navigate = useNavigate();
    const {isActive, setsignedIn} = useContext(UserActive);
    const {isSignInPage, setsignInPage} = useContext(LoginPage);
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);

    const handleSignOut = () => {
        isActive ? setsignedIn(false):setsignedIn(true);
        setsignInPage(!isSignInPage);
        navigate("/login");
    }

    return (
        // <div className='absolute w-full flex flex-wrap justify-between bg-gradient-to-tl from-black z-10 bg-opacity-50'>
        //     <img src={Logo} alt="logo" className='w-16 m-4'/>
            
        //     {!isSignInPage && 
        //         <div className="flex justify-center items-center">
        //             <ul className="flex">
        //                 <li className="p-4">Home</li>
        //                 <li className="p-4">Check Scrap Rate</li>
        //                 <li className="p-4">Sell Scrap</li>
        //             </ul>
        //             {isActive && 
        //                 <img 
        //                     className="w-14"
        //                     alt="user" 
        //                     src={BG_IMG}
        //                 />
        //             }
        //             <button 
        //                 className="font-bold px-2" 
        //                 onClick={handleSignOut}>
        //                 {isActive ? "Sign Out":"Sign Up"}
        //             </button>
        //         </div>
        //     }
        // </div>
        <div className='absolute w-full flex flex-wrap justify-between items-center px-4 z-10'>
            <img src={Logo} alt="logo" className='w-12 sm:w-16 m-2 sm:m-4' />
            
            {!isSignInPage && 
                <div className="relative flex items-center space-x-4">
                    {/* Dropdown menu for smaller screens */}
                    <div className="sm:hidden">
                        <button 
                            className="font-bold px-2 py-1 bg-opacity-80 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            Menu
                        </button>
                        {isDropdownOpen && 
                            <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                                <li 
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/")}>
                                        Home
                                </li>
                                <li 
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/scrap-rate")}>
                                        Check Scrap Rate
                                </li>
                                <li 
                                    className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                    onClick={() => navigate("/scrap-sell")}>
                                        Sell Scrap
                                </li>
                            </ul>
                        }
                    </div>
                    
                    {/* Full navbar for larger screens */}
                    <ul className="hidden sm:flex space-x-4 text-[#3ab44a] text-2xl">
                        <li className="font-bold cursor-pointer" onClick={() => navigate("/")}>Home</li>
                        <li className="font-bold cursor-pointer" onClick={() => navigate("/scrap-rate")}>Check Scrap Rate</li>
                        <li className="font-bold cursor-pointer" onClick={() => navigate("/scrap-sell")}>Sell Scrap</li>
                    </ul>

                    {isActive && 
                        <img 
                            className="w-10 sm:w-14 rounded-full" 
                            alt="user" 
                            src={BG_IMG} 
                        />
                    }
                    <button 
                        className="font-bold px-2 sm:px-4 py-1 sm:py-2 bg-opacity-80 bg-[#3ab44a] rounded hover:bg-gray-600 transition-colors text-white text-xl"
                        onClick={handleSignOut}>
                        {isActive ? "Sign Out" : "Sign Up"}
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;
