import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../assets/fonts/fontawesome/house-solid.svg';
import Heart from '../assets/fonts/fontawesome/heart-solid.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className='container'>
            <div className='rowFoot'>
                         {/* Col.1 */}
                    <div className='col'>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>
                                <img className='ico' title='accueil' alt='accueil' src={Home}/>
                                <h2>Acceuil</h2>
                            </li>
                        </NavLink>
                    </div>
                        {/* Col.2 */}
                    <div className='col'>
                        <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>
                                <img className='ico' title='favoris' alt='favoris' src={Heart}/>
                                <h2>Favoris</h2>
                            </li>
                        </NavLink>
                    </div> 
                </div> 
            </div>
        </div>
    );
};

export default Footer;