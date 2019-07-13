import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let dialogsData = [
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
];

let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

let messagesDAta = [
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
];

let messages = messagesDAta.map(m => <Message id={m.id} message={m.message} />);

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;