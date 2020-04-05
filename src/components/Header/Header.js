// rsc - stateless component skeleton
import React from 'react';
// importing logo by specifying file path
import logo from '../../images/logo.png';
// ./ - same folder & ../ - one level up
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* Dynamically allocating source */}
            <img src={logo} alt="logo"/>
            <nav>
                {/* Adding routes in href */}
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div> 
   );
};

export default Header;