import React from 'react';
import { reduxForm } from 'redux-form';
import TextInput from '../components/TextInput'

export const MessageInputContainer = props => {
  const submitForm = vals => {
    console.log('submit form: ', vals)
  }
  return (
    <TextInput
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  )
}


const formConfiguration = {
  form: 'my-very-own-form'
}

export default reduxForm(formConfiguration)(MessageInputContainer)