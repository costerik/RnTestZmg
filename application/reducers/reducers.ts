import {combineReducers} from 'redux';

// import reducers
import postsReducer from './posts-reducer';

const rootState = {
  postsReducer,
};

export type RootStateType = typeof rootState;

// reducers
const rootReducer = combineReducers<RootStateType>(rootState);
export type ReturnRootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
