import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

    let postsElemets = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} avatar={p.img}/>);

    return (
        <div className={s.postsBlock}>
            <h3>
                myPosts</h3>
            <div>
                <div>
                    <textarea ></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElemets}

            </div>
        </div>

    )
}

export default Posts;