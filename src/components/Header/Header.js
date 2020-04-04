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
        </div> 
   );
};

export default Header;