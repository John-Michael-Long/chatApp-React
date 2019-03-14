import React from 'react';
import MessageInputForm from './MessageInputForm'
// import MessageInput from '../containers/MessageInput'
// import TextInput from './TextInput'
import MessageInputContainer from '../containers/MessageInputContainer'
import VisibleMessages from '../containers/VisibleMessages'
//import axios from 'axios';

// const App = () => (
//   <div>
//     <MessageInputForm onSubmit={ () => console.log('FORM SUBMITTED!!!') } />
//   </div>
// )

class App extends React.Component {
  render() {
    return (
      <div>
        <MessageInputContainer />
        <VisibleMessages />
      </div>
    )
  }
}

export default App;