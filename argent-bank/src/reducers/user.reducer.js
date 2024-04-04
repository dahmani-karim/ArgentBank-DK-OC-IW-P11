import { GET_TOKEN } from '../actions/user.action';
import { GET_USER } from '../actions/user.action';

const initialState = {GET_TOKEN: null, GET_USER: null};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
        return action.payload;
    case GET_USER:
        return action.payload;
    default:
      return state;
  }
}