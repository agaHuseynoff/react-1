const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi , how are you?',
            likesCount: 12,
            img: 'http://www.luljettas.com/images/avatar/img-6.jpg'
        }, {
            id: 2,
            message: 'It\'s my first post.',
            likesCount: 7,
            img: 'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041444-stock-' +
                    'illustration-avatar-man-cartoon.jpg'
        }, {
            id: 3,
            message: 'Blabla',
            likesCount: 7,
            img: 'https://st4.depositphotos.com/5934840/25751/v/450/depositphotos_257517000-stock-' +
                    'illustration-man-portrait-avatar.jpg'
        }, {
            id: 4,
            message: 'da da',
            likesCount: 7,
            img: 'http://www.avatars24.de/img/avatars/avatar-5.jpg'
        }
    ],

    newPostText: 'agahuseynoff.com'
}

const profileReducer = (state = initialState , action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                img: 'http://www.luljettas.com/images/avatar/img-6.jpg'
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

            default:
                return state;
    }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT , newText: text });

export default profileReducer;