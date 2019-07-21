import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import Posts from './MyPosts';



const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());

    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    };

    return (
        <Posts updateNewPostText={onPostChange} 
            addPost={addPost} 
            posts={state.profilePage.posts} 
            newPostText={state.profilePage.newPostText} />
            
    )
}

export default PostsContainer;