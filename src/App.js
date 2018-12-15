import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MessageWindow from './MessageWindows'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];



class App extends Component {
state ={messages : [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
],
         isDisabled: false};
addMessage=(message)=>{
  this.setState(prevState=>({
    messages: [...prevState.messages, 
               message]
  }))
}
  render() {
  const {messages}=this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <MessageWindow  user={users[0]} messages={messages} addMessage={this.addMessage}/>
          <MessageWindow  user={users[1]}  messages={messages} addMessage={this.addMessage}/>      

        </div>
      </div>
    );
  }
}

export default App;
