import logo from './logo.svg';
import './App.css';
import ChatBox from './ChatBox';
import MessageList from './MessageList';

function App() {
  return (
    <div className="chat">
      <div>
        <ChatBox />
        <MessageList />
      </div>
    </div>
  );
}

export default App;
