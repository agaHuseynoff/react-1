import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreater, sendMessageCreater } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = state.messages.map(m => <Message id={m.id} message={m.message}/>);

    let newMessageBody =state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreater(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your messge'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;