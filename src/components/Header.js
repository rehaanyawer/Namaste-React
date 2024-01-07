import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='logo-container'>
        <img className='w-40' src={Logo} />
      </div>

      <div className=''>
        <ul className='flex space-x-10 p-5'>
          <li className=''>
            <Link to='/'>Home</Link>
          </li>
          <li className=''>
            <Link to='/Contact'>Contact Us</Link>
          </li>
          <li className=''>
            <Link to='/About'>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
