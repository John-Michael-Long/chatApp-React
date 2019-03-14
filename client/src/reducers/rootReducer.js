import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actionTypes from '../actions/actionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return [
        ...state,
        {
          text: action.text,
          msgID: action.msgID,
          receiverID: action.receiverID,
          senderID: action.senderID,
          conversationID: action.convoID,
          timeSent: action.timeSent
        },
      ];
    default:
      return state;
  }
}

// const visibilityFilter = (state = actionTypes.VisibilityFilters.SHOW_ALL, action) => {
//   switch (action.type) {
//     case actionTypes.SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  messages,
  form: formReducer
})

export default rootReducer;

//NOTE: THIS IS EQUVLANT OF ABOVE
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// const todoApp = (state = initialState, action) => {

//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {...state, 
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action);
//       }

//     case ADD_TODO:
//       return ({...state, {
//           todos: todos(state.todos, action)
//         }
//       })

//     case TOGGLE_TODO:
//       return ({ ...state, 
//         {
//           todos: todos(state.todos, action)
//         }
//       })
//   default:
//     return state
// }

