import React from 'react'
import PropTypes from 'prop-types'

const MessageList = ({ messages }) => {

  console.log('messgs: ', messages)

  return (
  <ul>
    {messages.map(message => (
      <li key={message.msgID}>{message.text}</li>
    ))}
  </ul>
)}


export default MessageList;