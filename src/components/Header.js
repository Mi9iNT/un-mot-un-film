import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Acceuil</li>
                    </NavLink>
                    <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Favoris</li>
                    </NavLink>
                </ul>
            </nav>
            <h1 className='title'>1mot1film</h1>
        </div>
    );
};

export default Header;