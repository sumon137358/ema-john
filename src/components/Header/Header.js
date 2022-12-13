import React from 'react';
import logo from '../../images/logo.png';
// import logoStyle from './Header.css';
import './Header.css'
// import nav from './Header.css'
const Header = () => {
    
    return (
        <div className='logoStyle'>
            
            <img src={logo} alt="" />
            <nav>
                
                <a href="/Shop">Shop</a>
                <a href="/Order">Order Review</a>
                <a href="/Inventory">Manage Inventory here</a>
                </nav>
        </div>
    );
};

export default Header;