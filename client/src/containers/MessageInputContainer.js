import React from 'react';
import { reduxForm } from 'redux-form';
import MessageInputForm from '../components/MessageInputForm'
import { sendMessage } from '../actions/actions'

export const MessageInputContainer = ({ dispatch, handleSubmit, reset }) => {
  const submitForm = value => {
    dispatch(sendMessage(value.messageInput))
    reset()
  }
  return (
    <MessageInputForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  )
}



const formConfiguration = {
  form: 'message-form'
}

export default reduxForm(formConfiguration)(MessageInputContainer)