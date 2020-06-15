import axios from 'axios';
import {AnyAction} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

// constants
import * as actionTypes from './action-types';
import * as generalActionTypes from '../general-actions-types';
const BASE_URL = `https://jsonplaceholder.typicode.com`;

//utilities;
//import * as storage from '../../utilities/async-storage';

// types
import type {PostsActionsTypes, PostType, UserType, CommentType} from './types';

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
    const newData = data.map((e, index) => {
      return {...e, key: e.id.toString(), read: index >= 19, favorite: index % 2 === 0};
    });
    dispatch(finishedFetchPosts(newData));
    try {
    } catch (e) {
      dispatch(errorFetchPosts(e));
    }
  };
};

export const swipeUpdatePosts = (posts: Array<PostType>): PostsActionsTypes => ({
  type: actionTypes.SWIPE_UPDATE_POSTS,
  payload: {
    state: generalActionTypes.UPDATE,
    posts,
  },
});

export const deleteAllPosts = (): PostsActionsTypes => ({
  type: actionTypes.DELETE_ALL_POSTS,
  payload: {
    state: generalActionTypes.DELETE,
  },
});

/* user */
export const startedFetchUserData = (): PostsActionsTypes => ({
  type: actionTypes.STARTED_FETCH_USER_DATA,
  payload: {
    state: generalActionTypes.FETCHING,
  },
});

export const finishedFetchUserData = (user: UserType): PostsActionsTypes => ({
  type: actionTypes.FINISHED_FETCH_USER_DATA,
  payload: {
    state: generalActionTypes.FINISHED,
    user,
  },
});

export const errorFetchUserData = (error: string): PostsActionsTypes => ({
  type: actionTypes.ERROR_FETCH_USER_DATA,
  payload: {
    state: generalActionTypes.ERROR,
    error,
  },
});

export const fetchUserData = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(startedFetchPosts());
    const {data} = await axios.get<UserType>(`${BASE_URL}/users/${id}`);
    dispatch(finishedFetchUserData(data));
    try {
    } catch (e) {
      dispatch(errorFetchPosts(e));
    }
  };
};

/* comments */
export const startedFetchComments = (): PostsActionsTypes => ({
  type: actionTypes.STARTED_FETCH_COMMENTS,
  payload: {
    state: generalActionTypes.FETCHING,
  },
});

export const finishedFetchComments = (comments: Array<CommentType>): PostsActionsTypes => ({
  type: actionTypes.FINISHED_FETCH_COMMENTS,
  payload: {
    state: generalActionTypes.FINISHED,
    comments,
  },
});

export const errorFetchComments = (error: string): PostsActionsTypes => ({
  type: actionTypes.ERROR_FETCH_COMMENTS,
  payload: {
    state: generalActionTypes.ERROR,
    error,
  },
});

export const fetchComments = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(startedFetchComments());
    try {
      const {data} = await axios.get<Array<CommentType>>(`${BASE_URL}/posts/${id}/comments`);
      dispatch(finishedFetchComments(data));
    } catch (e) {
      dispatch(errorFetchComments(e));
    }
  };
};

/* post */
export const startedFetchPost = (): PostsActionsTypes => ({
  type: actionTypes.STARTED_FETCH_POST,
  payload: {
    state: generalActionTypes.FETCHING,
  },
});

export const finishedFetchPost = (post: PostType): PostsActionsTypes => ({
  type: actionTypes.FINISHED_FETCH_POST,
  payload: {
    state: generalActionTypes.FINISHED,
    post,
  },
});

export const errorFetchPost = (error: string): PostsActionsTypes => ({
  type: actionTypes.ERROR_FETCH_POST,
  payload: {
    state: generalActionTypes.ERROR,
    error,
  },
});

export const fetchPost = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(startedFetchPost());
    try {
      const {data} = await axios.get<PostType>(`${BASE_URL}/posts/${id}`);
      dispatch(finishedFetchPost(data));
    } catch (e) {
      dispatch(errorFetchPost(e));
    }
  };
};

export const cleanSelectedPost = (): PostsActionsTypes => ({
  type: actionTypes.CLEAN_SELECTED_POST,
  payload: {
    state: generalActionTypes.UPDATE,
  },
});
