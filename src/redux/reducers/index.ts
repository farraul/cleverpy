import { combineReducers } from 'redux';
import allPosts from './allPosts';
import user from './user';

const rootReducer = combineReducers({
    allPosts, user 
});

export default rootReducer;