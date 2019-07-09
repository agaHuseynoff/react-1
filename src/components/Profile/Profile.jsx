import React from 'react';
import Posts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src='http://putter-club.com/sites/default/files/images/country/48/cf4fdb416edbf46965268a40a99e2809.jpg'
                    alt='bg'/>
            </div>

            <div>
                avatar + description
            </div>

            <Posts/>

           
        </div>
    )
}

export default Profile;