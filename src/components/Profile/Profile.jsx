import React from 'react';
import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} 
                    newPostText={props.profilePage.newPostText} 
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
        </div>
    )
}

export default Profile;