import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import logo from '../assets/showlore-logo.png';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='menu'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='logo'>
                <Link to='#'>
                    <img src={logo} alt='logo' />
                </Link>
            </div>
            <Searchbar />
        </nav>
    );
};

export default Navbar;
