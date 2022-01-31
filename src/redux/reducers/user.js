import {LOAD_USER, LOGOUT_USER, UPDATE_USER} from '../types';

const initialState = {
  
};

const User = (state = initialState, action) => {
    
    switch(action.type){
        case LOAD_USER :
            return action.payload;

         case LOGOUT_USER : 
            return initialState;
            
        case UPDATE_USER:
             return{ ...state, user: action.payload}; 
        default :
            return state
    }
}
export default User;