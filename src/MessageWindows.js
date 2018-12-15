import React, {Component} from 'react'
import AddMessage from './AddMessage';
import MessageList from './MessageList';
import PropTypes from 'prop-types'

class MessageWindow extends Component{
    
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
static propTypes ={
  user:PropTypes.object.isRequired,
  messages:PropTypes.array.isRequired,
  addMessage:PropTypes.func.isRequired
}
onSubmitMessage=(text)=>{
  this.props.addMessage(
    {username:this.props.user.username, 
     text: text}
    )
}
render(){

  const { messages,user}= this.props;
  return(
 <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
             <MessageList 
              messages={messages}
              user={user}
            />
            <AddMessage 
              onSubmitMessage={this.onSubmitMessage}
            />
        
 </div>
)}}

export default MessageWindow;