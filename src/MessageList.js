import React, { useState, useEffect } from 'react';
import db from "./firebase";

const MessageList = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const subscribe = db.collection("chat")
            .onSnapshot((snapshot) => {
                const sort = snapshot.docs.map((doc) => doc.data())
                .sort((a, b) => new Date(b.time) - new Date(a.time));
                setMessages(sort);
            });
        return () => {
            subscribe();
        }
    }, []);
    return (
        <div>
            <h1>MessageList</h1>
            <ul>
                {messages.length ? messages.map((message) => (
                    <div className="message" key={message.time.toString()}>
                        <div>{message.name}: {message.message}</div>
                        <div>{message.time.toString()}</div>
                    </div>
                )) : <div className="message">Inga resultat</div>}
            </ul>
        </div>
    )

}

export default MessageList;