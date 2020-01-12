import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <div className="current-date">{new Date().getFullYear()}</div>
        <div className='options'>
            
        </div>
    </div>
)

export default Header;