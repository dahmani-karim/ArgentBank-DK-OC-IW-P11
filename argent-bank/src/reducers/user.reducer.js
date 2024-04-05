//import { GET_TOKEN } from '../actions/user.action';
import { GET_PROFILE } from '../actions/user.action';

const initialState = {GET_TOKEN: sessionStorage.getItem("token"), GET_PROFILE: null};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    //case GET_TOKEN:
      //  return action.payload;
    case GET_PROFILE:
        return action.payload;
    default:
      return state;
  }
}