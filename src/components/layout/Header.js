import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='container'>
            <img src="/images/logo.png" alt="TotoroMania Logo" />
            <h1>TotoroMania</h1>
            </div>
        </div>
    );
}

export default Header;
