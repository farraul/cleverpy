import {LOAD_POSTS, LOGOUT_POSTS, UPDATE_POSTS} from '../types';

const initialState = {
  
};

const allPosts = (state = initialState, action) => {
    
    switch(action.type){
        case LOAD_POSTS :
            return action.payload;

         case LOGOUT_POSTS : 
            return initialState;
            
        case UPDATE_POSTS:
             return{ ...state, user: action.payload}; 
        default :
            return state
    }
}
export default allPosts;