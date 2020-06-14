import initialState from './initial-state';
import * as actionTypes from './action-types';

import type {StateType, PostsActionsTypes} from './types';

export default (state: StateType = initialState, action: PostsActionsTypes): StateType => {
  switch (action.type) {
    case actionTypes.STARTED_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
      };
    case actionTypes.FINISHED_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
        posts: action.payload.posts,
        error: null,
      };
    case actionTypes.ERROR_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
