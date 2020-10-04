import {actions} from '../actions'
export const counter = (state = 0, action) => {
  switch(action.type) {
     case actions.INCREMENT:
       return state = state + 1;
   
     case actions.DECREMENT :
       return state = state -1;
     default:
       return state;
   }
};