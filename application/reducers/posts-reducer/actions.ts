import axios from 'axios';
import {AnyAction} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

// constants
import * as actionTypes from './action-types';
import * as generalActionTypes from '../general-actions-types';
const BASE_URL = `https://jsonplaceholder.typicode.com`;

//utilities;
import * as storage from '../../utilities/async-storage';

// types
import type {PostsActionsTypes, PostType, UserType, CommentType} from './types';
import {ReturnRootStateType} from '../reducers';

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
    try {
      dispatch(startedFetchPosts());
      const [readStorage, favStorage, {data}] = await Promise.all([
        storage.get<Array<number>>('READ'),
        storage.get<Array<number>>('FAVORITE'),
        axios.get<Array<PostType>>(`${BASE_URL}/posts`),
      ]);
      let readObj: {[key: number]: number} = {},
        favObj: {[key: number]: number} = {};
      if (readStorage) {
        readObj = readStorage.reduce((prev, current): {[key: number]: number} => {
          prev[current] = current;
          return prev;
        }, readObj);
      }
      if (favStorage) {
        favObj = favStorage.reduce((prev, current) => {
          prev[current] = current;
          return prev;
        }, favObj);
      }

      const newData = data.map((e, index) => {
        return {
          ...e,
          key: e.id.toString(),
          read: readObj[e.id] !== undefined ? true : index >= 19,
          favorite: favObj[e.id] ? true : false,
        };
      });
      dispatch(finishedFetchPosts(newData));
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
    try {
      dispatch(startedFetchPosts());
      const {data} = await axios.get<UserType>(`${BASE_URL}/users/${id}`);
      dispatch(finishedFetchUserData(data));
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

export const fetchPost = (id: number): ThunkAction<Promise<void>, ReturnRootStateType, {}, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => ReturnRootStateType,
  ): Promise<void> => {
    dispatch(startedFetchPost());
    try {
      const {
        postsReducer: {posts},
      } = getState();
      const post = posts.find((e) => e.id === id);
      dispatch(finishedFetchPost(post as PostType));
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

/* update posts*/
export const startedUpdatePost = (): PostsActionsTypes => ({
  type: actionTypes.STARTED_UPDATE_POST,
  payload: {
    state: generalActionTypes.UPDATE,
  },
});

export const finishedUpdatePost = (posts: Array<PostType>): PostsActionsTypes => ({
  type: actionTypes.FINISHED_UPDATE_POST,
  payload: {
    state: generalActionTypes.FINISHED,
    posts,
  },
});

export const errorUpdatePost = (error: string): PostsActionsTypes => ({
  type: actionTypes.ERROR_UPDATE_POST,
  payload: {
    state: generalActionTypes.ERROR,
    error,
  },
});

export const updatePost = (
  id: number,
  property: keyof PostType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any = true,
): ThunkAction<Promise<void>, ReturnRootStateType, {}, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => ReturnRootStateType,
  ): Promise<void> => {
    dispatch(startedUpdatePost());
    try {
      const {
        postsReducer: {posts},
      } = getState();
      const keyStorage = property.toUpperCase();
      const getResponse = await storage.get<Array<number>>(keyStorage);
      let read: Array<number> = [];
      if (!getResponse) {
        await storage.save(keyStorage, '[]');
      } else {
        read = [...getResponse];
      }
      const found = read.find((e) => e === id);
      if (!found) {
        read.push(id);
      } else {
        if (!value) {
          read = [...read.filter((e) => e !== id)];
        }
      }
      await storage.save(keyStorage, read);

      const newPosts = posts.map((e) => ({...e, [property]: e.id === id ? value : e[property]}));
      dispatch(finishedUpdatePost(newPosts));
    } catch (e) {
      dispatch(errorUpdatePost(e));
    }
  };
};
