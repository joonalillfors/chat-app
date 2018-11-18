import React, { Component } from 'react'
import './App.css'
import {getAName} from './components/usernames'
import {connect} from 'react-redux'
import Messages from './components/messages'
import Users from './components/users'

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    const name = getAName()
    dispatch({type: 'username', name})
  }

  sendIn = (event) => {
    event.preventDefault()
    const {dispatch, user, message} = this.props
    dispatch({type: 'chat message', msg: user+': '+message})
    //sendToServer(user+': '+message)
  }

  handleChange = (event) => {
    const {dispatch} = this.props
    dispatch({type: 'typing', msg: event.target.value})
  }

  render() {
    const {message, messages, persons} = this.props
    return (
      <div className="App">
        <Messages messages={messages}/>
        <Users users={persons}/>
        <form action="" onSubmit={this.sendIn}>
          <input 
            id="m" 
            autoComplete="off" 
            value={message} 
            onChange={this.handleChange}
          />
          <button >Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
  messages: state.messages,
  message: state.message,
  user: state.user
})

export default connect(mapStateToProps)(App);
