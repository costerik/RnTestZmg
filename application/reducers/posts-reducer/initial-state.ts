import * as generalActionsTypes from '../general-actions-types';

import type {StateType} from './types';

const state: StateType = {
  state: generalActionsTypes.IDLE,
  posts: [],
  error: null,
  postSelected: {
    post: null,
    user: null,
    comments: [],
  },
};

export default state;
