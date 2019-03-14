import React from 'react';
import MessageInputForm from './MessageInputForm'
// import MessageInput from '../containers/MessageInput'
// import TextInput from './TextInput'
// import MessageInputContainer from '../containers/MessageInputContainer'

//import axios from 'axios';

// const App = () => (
//   <div>
//     <MessageInputForm onSubmit={ () => console.log('FORM SUBMITTED!!!') } />
//   </div>
// )

class App extends React.Component {
  sendMessage(val){
    console.log('submmited! vals: ', val)
  }

  render() {
    return (
      <div>
        <MessageInputForm onSubmit={this.sendMessage} />
      </div>
    )
  }
}

export default App;