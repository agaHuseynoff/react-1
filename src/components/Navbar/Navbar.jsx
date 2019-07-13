import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='rr.html' activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='rr.html' activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav> 
        // sjdj
    )
}

export default Navbar;