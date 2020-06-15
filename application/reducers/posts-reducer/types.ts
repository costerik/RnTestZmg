import * as actionsTypes from './action-types';

export type PostType = {
  key: string;
  userId: number;
  id: number;
  title: string;
  body: string;
  read: boolean;
  favorite: boolean;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

export type GeoType = {
  lat: string;
  lng: string;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type StateType = {
  state: string;
  posts: Array<PostType>;
  error: string | null | undefined;
  postSelected: {
    post: PostType | null;
    user: UserType | null;
    comments: Array<CommentType>;
  };
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

export type StartedFetchUserDataType = {
  type: typeof actionsTypes.STARTED_FETCH_USER_DATA;
  payload: {
    state: string;
  };
};

export type FinishedFetchUserDataType = {
  type: typeof actionsTypes.FINISHED_FETCH_USER_DATA;
  payload: {
    state: string;
    user: UserType | null;
  };
};

export type ErrorFetchUserDataType = {
  type: typeof actionsTypes.ERROR_FETCH_USER_DATA;
  payload: {
    state: string;
    error: string;
  };
};

export type StartedFetchCommentsType = {
  type: typeof actionsTypes.STARTED_FETCH_COMMENTS;
  payload: {
    state: string;
  };
};

export type FinishedFetchCommentsType = {
  type: typeof actionsTypes.FINISHED_FETCH_COMMENTS;
  payload: {
    state: string;
    comments: Array<CommentType>;
  };
};

export type ErrorFetchCommentsType = {
  type: typeof actionsTypes.ERROR_FETCH_COMMENTS;
  payload: {
    state: string;
    error: string;
  };
};

export type StartedFetchPostType = {
  type: typeof actionsTypes.STARTED_FETCH_POST;
  payload: {
    state: string;
  };
};

export type FinishedFetchPostType = {
  type: typeof actionsTypes.FINISHED_FETCH_POST;
  payload: {
    state: string;
    post: PostType;
  };
};

export type ErrorFetchPostType = {
  type: typeof actionsTypes.ERROR_FETCH_POST;
  payload: {
    state: string;
    error: string;
  };
};

export type SwipeUpdatePostsType = {
  type: typeof actionsTypes.SWIPE_UPDATE_POSTS;
  payload: {
    state: string;
    posts: Array<PostType>;
  };
};

export type DeleteAllPostsType = {
  type: typeof actionsTypes.DELETE_ALL_POSTS;
  payload: {
    state: string;
  };
};

export type CleanSelectedPostType = {
  type: typeof actionsTypes.CLEAN_SELECTED_POST;
  payload: {
    state: string;
  };
};

export type StartedUpdatePostType = {
  type: typeof actionsTypes.STARTED_UPDATE_POST;
  payload: {
    state: string;
  };
};

export type FinishedUpdatePostType = {
  type: typeof actionsTypes.FINISHED_UPDATE_POST;
  payload: {
    state: string;
    posts: Array<PostType>;
  };
};

export type ErrorUpdatePostType = {
  type: typeof actionsTypes.ERROR_UPDATE_POST;
  payload: {
    state: string;
    error: string;
  };
};

export type PostsActionsTypes =
  | StartedFetchPostsType
  | FinishedFetchPostsType
  | ErrorFetchPostsType
  | StartedFetchUserDataType
  | FinishedFetchUserDataType
  | ErrorFetchUserDataType
  | StartedFetchCommentsType
  | FinishedFetchCommentsType
  | ErrorFetchCommentsType
  | StartedFetchPostType
  | FinishedFetchPostType
  | ErrorFetchPostType
  | StartedUpdatePostType
  | FinishedUpdatePostType
  | ErrorUpdatePostType
  | SwipeUpdatePostsType
  | DeleteAllPostsType
  | CleanSelectedPostType;
