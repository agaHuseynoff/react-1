import { rerenderEntireTree } from "../render";


let state = {
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
        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        img: 'http://www.luljettas.com/images/avatar/img-6.jpg'
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;