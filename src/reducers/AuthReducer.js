import { 
    EMAIL_CHANGED,
    PASWD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER 
} from '../actions/types'

const INITIAL_STATE = { 
    email:'',
    paswd:'',
    user:null,
    error:'',
    loading:false
}
export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:
        return { ...state, email: action.payload }
        break;

        case PASWD_CHANGED:
        return { ...state, paswd: action.payload }
        break;

        case LOGIN_USER_SUCCESS:
        return { ...state,user:action.payload,error:'', ...INITIAL_STATE }
        break;

        case LOGIN_USER_FAILED:
        return { ...state, error:action.payload,paswd:'',loading:false }
        break;

        case LOGIN_USER:
            return { ...state,loading:true,error:''}
    }
    return state;
}