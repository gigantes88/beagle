import React, { Component } from 'react';
import Main from './components/main';
import Chat from './components/chat';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Chat />
      </div>
    );
  }
}

export default App;
