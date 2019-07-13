import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {

    let postDAta = [
        {
            id: 1,
            message: 'Hi , how are you?',
            likesCount: 12
        }, {
            id: 2,
            message: 'It\'s my first post.',
            likesCount: 7
        }, {
            id: 3,
            message: 'Blabla',
            likesCount: 7
        }, {
            id: 4,
            message: 'da da',
            likesCount: 7
        }

    ];

    let postsElemets = postDAta.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

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