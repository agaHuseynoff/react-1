import React from 'react';
import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;