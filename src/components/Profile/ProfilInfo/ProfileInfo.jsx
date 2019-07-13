import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.bg}>
                <img
                    src='http://putter-club.com/sites/default/files/images/country/48/cf4fdb416edbf46965268a40a99e2809.jpg'
                    alt='bg'/>
            </div>

            <div className={s.description}>
                avatar + description
            </div>
           
        </div>
    )
}

export default ProfileInfo;