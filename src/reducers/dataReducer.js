import {GET_COMMENTS, GET_POST, GET_POSTS, LOAD_DATA, CLEAR_POST, ERROR_POST} from "../actions/types";

const initialState = {
  posts: [],
  comments: {},
  post: {},
  load: false
};

export default function (state = initialState, action) {

  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        load: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        load: false
      };
    case LOAD_DATA:
      return {
        ...state,
        load: true
      };
    case CLEAR_POST:
      return {
        ...state,
        post: {}
      };
    case ERROR_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }

}
