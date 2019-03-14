import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageInputForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message</label>
        <div>
          <Field
            name="messageInput"
            component="input"
            type="text"
            placeholder="Enter your message..."
          />
        </div>
      </div>
      <div>
        <button type="submit">SEND</button>
      </div>
    </form>
  )
}

export default reduxForm({form:'message-form'})(MessageInputForm)