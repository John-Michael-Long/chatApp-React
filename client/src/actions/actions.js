import * as actionTypes from './actionTypes';

let messageID = 0;

export const sendMessage = (text, receiverID = 345, convoID = 678) => ({
  type: actionTypes.SEND_MESSAGE,
  msgID: messageID++,
  senderID: 1234, 
  receiverID,
  text,
  convoID,
  timeSent: Date.now()
})