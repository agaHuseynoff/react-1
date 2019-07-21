import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from './ProfilInfo/ProfileInfo';
import PostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;