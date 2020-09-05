import './App.css';
import React, { Component } from 'react';
import Header from './Header.jsx';
import ChatWindow from './ChatWindow.jsx';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <ChatWindow
            username={this.state.users[0].username}
            messages={this.state.messages} />
          <ChatWindow
            username={this.state.users[1].username}
            messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
