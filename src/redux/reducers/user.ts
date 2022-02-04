import { LOAD_USER, LOGOUT_USER, UPDATE_USER } from '../types';

const User = ( state = {}, action: { type: string, payload: string } ) => {
    
    switch( action.type ){

        case LOAD_USER :
            return action.payload;

         case LOGOUT_USER : 
            return {};
            
        case UPDATE_USER:
             return{ ...state, user: action.payload }; 

        default :
            return state

    }

}

export default User;