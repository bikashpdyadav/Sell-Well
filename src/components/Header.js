import Logo from '../images/logo.jpeg';
import BG_IMG from '../images/bg-img.jpeg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserActive from '../utils/userActiveContext';

const Header = () => {
    const navigate = useNavigate();
    const {isActive, setsignedIn} = useContext(UserActive);

    const handleSignOut = () => {
        setsignedIn(false);
        navigate("/");
    }

    return (
        <div className='w-full absolute flex justify-between bg-gradient-to-b from-black z-10'>
            <img src={Logo} alt="logo" className='w-16 m-4'/>
            {isActive && 
                <div className="flex p-2 items-center">
                <img 
                    className="w-14"
                    alt="user" 
                    src={BG_IMG}
                />
                <button className="text-white font-bold px-4" onClick={handleSignOut}>
                    Sign Out
                </button>
                </div>
            }
        </div>
    )
}

export default Header;
