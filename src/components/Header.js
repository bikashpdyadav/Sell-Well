import Logo from '../images/logo.jpeg';
const Header = () => {
    return (
        <div className='w-full absolute bg-gradient-to-b from-black z-10'>
            <img src={Logo} alt="logo" className='w-16 m-4'/>
        </div>
    )
}

export default Header;
