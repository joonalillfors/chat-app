import React, { Component } from 'react'
import './App.css'
import {getAName} from './components/usernames'
import {connect} from 'react-redux'
import Messages from './components/messages'
import Users from './components/users'
import loginService from './components/login'
import AuthBar from './components/authentication-bar'
import InputBar from './components/input'

class App extends Component {
  state = {
    emoji: false,
  }

  componentDidMount() {
    const loggedUserJSON = window.localStorage.getItem('loggedUserJSON')
    const {dispatch} = this.props
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({type: 'LOGIN', user})
    } else {
      const name = getAName()
      dispatch({type: 'username', name})
    }
  }

  sendIn = (event) => {
    event.preventDefault()
    const {dispatch, user, message} = this.props
    dispatch({type: 'chat message', msg: user+': '+message})
  }

  handleChange = (event) => {
    const {dispatch} = this.props
    dispatch({type: 'typing', msg: event.target.value})
  }

  handleNameChange = (event) => {
    const {dispatch} = this.props
    dispatch({type: 'TYPING_USERNAME', username: event.target.value})
  }

  handlePwChange = (event) => {
    const {dispatch} = this.props
    dispatch({type: 'TYPING_PASSWORD', password: event.target.value})
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const {dispatch, username, password} = this.props
      const user = await loginService({
        username,
        password
      })
      
      dispatch({type: 'LOGIN', user})
      window.localStorage.setItem('loggedUserJSON', JSON.stringify(user))
    } catch (e) {
      const {dispatch} = this.props
      console.log('login failed')
      dispatch({type: 'FAILED_LOGIN'})
    }
  }

  logout = (event) => {
    const {dispatch} = this.props
    const name = getAName()
    dispatch({type: 'LOGOUT', name})
  }
 
  render() {
    const {messages, persons, user} = this.props
    return (
      <div className="App">
        <Messages messages={messages}/>
        <div id="rightBar">
          <AuthBar app={this} />
          <Users users={persons} user={user} />
        </div>
        <InputBar app={this} /> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
  messages: state.messages,
  message: state.message,
  user: state.user,
  logged: state.logged,
  username: state.username,
  password: state.password,
  loggedUser: state.user
})

export default connect(mapStateToProps)(App)
