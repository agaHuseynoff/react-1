const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
     _state: {
        profilePage: {
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
        },
    
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                }, {
                    id: 2,
                    message: 'How are you'
                }, {
                    id: 3,
                    message: 'Thank you..'
                }, {
                    id: 4,
                    message: 'Thank you..'
                }, {
                    id: 5,
                    message: 'Thank you..'
                }, {
                    id: 6,
                    message: 'Thank you..'
                }
            ],
    
            dialogs: [
                {
                    id: 1,
                    name: 'Dima'
                }, {
                    id: 2,
                    name: 'Andrey'
                }, {
                    id: 3,
                    name: 'Sveta'
                }, {
                    id: 4,
                    name: 'Sasha'
                }, {
                    id: 5,
                    name: 'Victor'
                }, {
                    id: 6,
                    name: 'Victor'
                }
            ]
        }
    },

    _callSubscriber () {
        console.log('Add Post');
    },

    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                img: 'http://www.luljettas.com/images/avatar/img-6.jpg'
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT , newText: text });
 
export default store;

window.store = store;