import {LOAD_POSTS, LOGOUT_POSTS} from '../types';

const initialState = {
  
};

const allPosts = (state = initialState, action) => {
    
    switch(action.type){
        case LOAD_POSTS :
            return action.payload;

         case LOGOUT_POSTS : 
            return initialState;
            
       
        default :
            return state
    }
}
export default allPosts;