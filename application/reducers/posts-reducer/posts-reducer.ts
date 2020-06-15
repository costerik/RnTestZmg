import initialState from './initial-state';
import * as actionTypes from './action-types';

import type {StateType, PostsActionsTypes} from './types';

export default (state: StateType = initialState, action: PostsActionsTypes): StateType => {
  switch (action.type) {
    case actionTypes.STARTED_UPDATE_POST:
    case actionTypes.STARTED_FETCH_POST:
    case actionTypes.STARTED_FETCH_USER_DATA:
    case actionTypes.STARTED_FETCH_COMMENTS:
    case actionTypes.STARTED_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
      };
    case actionTypes.FINISHED_UPDATE_POST:
    case actionTypes.SWIPE_UPDATE_POSTS:
    case actionTypes.FINISHED_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
        posts: action.payload.posts,
        error: null,
      };
    case actionTypes.ERROR_UPDATE_POST:
    case actionTypes.ERROR_FETCH_POST:
    case actionTypes.ERROR_FETCH_USER_DATA:
    case actionTypes.ERROR_FETCH_COMMENTS:
    case actionTypes.ERROR_FETCH_POSTS:
      return {
        ...state,
        state: action.payload.state,
        error: action.payload.error,
      };
    case actionTypes.FINISHED_FETCH_USER_DATA:
      return {
        ...state,
        state: action.payload.state,
        postSelected: {
          ...state.postSelected,
          user: action.payload.user,
        },
        error: null,
      };
    case actionTypes.FINISHED_FETCH_COMMENTS:
      return {
        ...state,
        state: action.payload.state,
        postSelected: {
          ...state.postSelected,
          comments: action.payload.comments,
        },
        error: null,
      };
    case actionTypes.FINISHED_FETCH_POST:
      return {
        ...state,
        state: action.payload.state,
        postSelected: {
          ...state.postSelected,
          post: action.payload.post,
        },
        error: null,
      };
    case actionTypes.DELETE_ALL_POSTS:
      return {
        ...state,
        posts: [],
      };
    case actionTypes.CLEAN_SELECTED_POST:
      return {
        ...state,
        state: action.payload.state,
        postSelected: {
          user: null,
          post: null,
          comments: [],
        },
      };
    default:
      return {
        ...state,
      };
  }
};
