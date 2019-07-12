import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="http://www.luljettas.com/images/avatar/img-6.jpg" alt='avatar'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>

        </div>

    )
}

export default Post;