import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='http://www.logospng.com/images/12/logo-maker-create-your-own-its-free-12885.png'
                alt='logo'/>
        </header>
    )
}

export default Header;