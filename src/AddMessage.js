import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component{
  static propTypes={
    onSubmitMessage:PropTypes.func.isRequired,
  }
  state={
    message:''
  }
handleChange=(event)=>{
  const {value}=event.target;
  this.setState({message:value});
}
handleSubmitMessage=(event)=>{
  event.preventDefault()
  this.props.onSubmitMessage(this.state.message);

   
}
render(){
  const {message}=this.state;
  return(
<div>
              <form className="input-group" onSubmit={this.handleSubmitMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.message} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={message===''}>
                    SEND
                  </button>
                </div>
              </form>
            </div>


)}}

export default AddMessage;