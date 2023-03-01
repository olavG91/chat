// import logo from './logo.svg';
import './App.css';
import ChatBox from './ChatBox';
import MessageList from './MessageList';
import Login from './Login';
import React, { useState } from 'react';
import ReactRoutes from './ReactRoutes';

function App() {

  const [userData, setUserData] = useState(null);

  const changeLogin = (e) => {

    if (e) {
      setUserData(e);
    } else {
      setUserData(null);
    }

    console.log("User data from db:");
    console.log(userData);
  }

  return (
    <div className="chat">

      <div>
        <Login loggedIn={(e) => { changeLogin(e) }} />
        {userData ? (
          <div>
            <ChatBox displayName={userData.displayName} />
            <MessageList />
          </div>
        ) : <MessageList />}

      </div>
    </div>
  );
}

export default App;
