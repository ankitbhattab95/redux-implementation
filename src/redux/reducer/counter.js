import { actions } from '../actions'

let initialState = { count: 0 }

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state = { ...initialState, count: state.count + 1 };
      
      case actions.DECREMENT:
        return state = { ...initialState, count: state.count - 1 };

    default:
      return state;
  }
};