import React, {Component} from 'react'

export default class Messages extends Component {
  state = {
    key: 0,
  }

  componentDidUpdate() {
    // TODO dont scroll always
    window.scrollTo(0, document.body.scrollHeight)
  }

  getKey = () => {
    this.setState({key: this.state.key+1})
    return this.state.key
  }

  render () {
    var i = 0
    return (
      <ul id='messages'>
        {this.props.messages.map(msg => 
          <li key={i++}>{msg}</li>
        )}
      </ul>
    )
  }
}