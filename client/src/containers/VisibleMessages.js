import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const filterMessages = (messages, filter) => {
  return messages
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return messages
  // }
}


const mapStateToProps = state => {
  return {messages: state.messages} //filterMessages(state.messages, 'SHOW_ALL')
}

// const mapDispatchToProps = dispatch => ({

// })


export default connect(mapStateToProps)(MessageList)