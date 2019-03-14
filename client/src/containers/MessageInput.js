import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/actions'
import { TextInput } from '../components/TextInput'

// const MessageInput = ({ dispatch }) => {

const MessageInput = ({ handleChange }) => {
  const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges,
    } = this.props;

  return (
    <div>
      <TextInput 
        handleChange={newValue => addChange('title', newValue)}
      />

    </div>
  )
}

export default connect()(MessageInput)
