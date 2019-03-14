import React  from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// const TextInput = ({handleChange, title, value}) => (
//   <div>
//     <br/>
//     {title}
//     <br/>
//     <input 
//       type="text" 
//       value={value} 
//       onChange{event => handleChange(event.target.value)} 
//     />
//     <br/>
//   </div>
// )

const TextInput = ({ handleSubmit, onSubmit, title, value }) => (
  <form onSubmit={handleSubmit(val => console.log(val))}>
    <label>{title}</label>
    <Field
      name={title}
      type="text"
      component="input"
      id="message-in"
      placeholder="Enter your message..."
    />
    <button type="submit">SEND</button>
  </form>
)

// TextInput.propTypes = {
//   handleSubmit: PropTypes.func,
//   title: PropTypes.string,
//   value: PropTypes.string,
// }

// TextInput.defaultProps = {
//   handleSubmit: event => console.info(`New value: ${event.target.value}`),
//   title: null,
//   value: null
// }

export default TextInput;

// export default reduxForm({form: 'textInput'})(TextInput)