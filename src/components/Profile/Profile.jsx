import React from 'react';
import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>

        </div>
    )
}

export default Profile;