import React from 'react';
import '../scss/Navbar.scss';

const Navbar = () => {

    // Denne kunne kommet fra en props eller state.
    const username = "stian";

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item navbar__item-logo'>
                    HIOF
                </li>
                <li className='navbar__item navbar__item-user'>
                    User {username}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;