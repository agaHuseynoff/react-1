import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div>
            myPosts
            <div>
                <textarea ></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                <Post/>
            </div>
        </div>

    )
}

export default Posts;