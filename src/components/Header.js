import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
const Title = () => {
  return (
    <a href='/'>
      <img src={Logo} className='h-28 p-2' alt='logo' />
    </a>
  );
};

const Header = () => {
  return (
    <div className='flex bg-gray-200 justify-between'>
      <Title />

      <div className=''>
        <ul className='flex py-10'>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/Contact'>Contact Us</Link>
          </li>
          <li className='px-2'>
            <Link to='/About'>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
