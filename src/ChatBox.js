import React from 'react';
import db from "./firebase";

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messageRef: React.createRef()
        };
    }
    state = {}

    addDataToFirebase(name, message, time) {
        db.collection("chat")
            .add({
                name: name,
                message: message,
                time: time
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addDataToFirebase(this.state.name, this.state.message, new Date().toLocaleString());
        this.setState({ message: "" });
        this.state.messageRef.current.focus();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (<div>
            <h1>Chat</h1>
            <form>
                <div>
                    <label htmlFor="name">Namn:</label>
                </div>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>
                </div>
                <div>
                    <label htmlFor="message">Meddelande:</label>
                </div>

                <div>
                    <textarea value={this.state.message} onChange={this.handleChange} name="message" ref={this.state.messageRef}></textarea>
                </div>

                <div>
                    <button onClick={this.handleSubmit}>Skicka</button>
                </div>
            </form>
        </div>);
    }
}

export default ChatBox;