import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <a href='rr.html'>Profile</a>
                </li>
                <li className={s.item}>
                    <a href='rr.html'>Messages</a>
                </li>
                <li className={s.item}>
                    <a href='rr.html'>News</a>
                </li>
                <li className={s.item}>
                    <a href='rr.html'>Settings</a>
                </li>
            </ul>
        </nav> 
        // sjdj
    )
}

export default Navbar;