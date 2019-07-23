import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
// import Posts from './MyPosts';
import { connect } from 'react-redux';
import Posts from './MyPosts';


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },

        addPost: () => {
            dispatch(addPostActionCreater());
        }

    }
};

const PostsContainer = connect(mapStateToProps , mapDispatchToProps)(Posts);

export default PostsContainer;