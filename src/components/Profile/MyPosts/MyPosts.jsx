import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';



const Posts = (props) => {

    let postsElemets = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} avatar={p.img}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreater());

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>
                myPosts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElemets}

            </div>
        </div>

    )
}

export default Posts;