import {LOAD_POSTS, LOGOUT_POSTS, UPDATE_POSTS} from '../types';

const allPosts = ( state = {}, action: { type: string, payload: string } ) => {
    
    switch( action.type ){

        case LOAD_POSTS:
            return action.payload;

         case LOGOUT_POSTS: 
            return {};

         case UPDATE_POSTS:
            return{ ...state, datitos: action.payload }; 
       
        default :
            return state

    }

}

export default allPosts;