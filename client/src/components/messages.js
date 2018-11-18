import React from 'react'

const Messages = ({messages}) => {
  var i = 0
  return (
    <ul id='messages'>
      {messages.map(msg => 
        <li key={i++}>{msg}</li>
      )}
    </ul>
  )
}

export default Messages