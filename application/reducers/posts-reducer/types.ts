import * as actionsTypes from './action-types';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type StateType = {
  state: string;
  posts: Array<PostType>;
  error: string | null | undefined;
};

export type StartedFetchPostsType = {
  type: typeof actionsTypes.STARTED_FETCH_POSTS;
  payload: {
    state: string;
  };
};

export type FinishedFetchPostsType = {
  type: typeof actionsTypes.FINISHED_FETCH_POSTS;
  payload: {
    state: string;
    posts: Array<PostType>;
  };
};

export type ErrorFetchPostsType = {
  type: typeof actionsTypes.ERROR_FETCH_POSTS;
  payload: {
    state: string;
    error: string;
  };
};

export type PostsActionsTypes = StartedFetchPostsType | FinishedFetchPostsType | ErrorFetchPostsType;
