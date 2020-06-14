import axios from 'axios';
import {AnyAction} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

// constants
import * as actionTypes from './action-types';
import * as generalActionTypes from '../general-actions-types';
const BASE_URL = `https://jsonplaceholder.typicode.com`;

// utilities
//import * as storage from '../../utilities/async-storage';

// types
import type {PostsActionsTypes, PostType} from './types';

/* posts */
export const startedFetchPosts = (): PostsActionsTypes => ({
  type: actionTypes.STARTED_FETCH_POSTS,
  payload: {
    state: generalActionTypes.FETCHING,
  },
});

export const finishedFetchPosts = (posts: Array<PostType>): PostsActionsTypes => ({
  type: actionTypes.FINISHED_FETCH_POSTS,
  payload: {
    state: generalActionTypes.FINISHED,
    posts,
  },
});

export const errorFetchPosts = (error: string): PostsActionsTypes => ({
  type: actionTypes.ERROR_FETCH_POSTS,
  payload: {
    state: generalActionTypes.ERROR,
    error,
  },
});

export const fetchPosts = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(startedFetchPosts());
    const {data} = await axios.get<Array<PostType>>(`${BASE_URL}/posts`);
    dispatch(finishedFetchPosts(data));
    try {
    } catch (e) {
      dispatch(errorFetchPosts(e));
    }
  };
};
