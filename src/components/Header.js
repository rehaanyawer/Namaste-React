import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.png';
import UserContext from '../utils/UserContext';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const data = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='logo-container'>
        {/* <img className='w-40' src={Logo} /> */}
        LOGO
      </div>

      <div className=''>
        <ul className='flex space-x-10 p-5 '>
          <li className=''>
            <Link to='/'>Home</Link>
          </li>
          <li className=''>
            <Link to='/Contact'>Contact Us</Link>
          </li>
          <li className=''>
            <Link to='/About'>About Us</Link>
          </li>
          <li>
            <button onClick={handleLogin}>
              {isLogin ? 'Logout' : 'Login'}
            </button>
          </li>
          <li>
            <Link to='/cart'> Cart ({cartItems.length} items) </Link>
          </li>
          <li className=''>{data.default}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
