import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import { 
    EMAIL_CHANGED,
    PASWD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
 } from './types'
export const emailChanged = (text)=> {
    return{
        type: EMAIL_CHANGED,
        payload:text
    }
}

export const paswdChanged = (text) => {
    return {
        type:PASWD_CHANGED,
        payload:text
    }
}

export const loginUser = ({ email ,paswd }) => {
    return (dispatch) => {
        dispatch({type:LOGIN_USER})
        
        firebase.auth().signInWithEmailAndPassword(email,paswd)
        .then(user =>loginUserSuccess(dispatch,user))
        .catch((err)=>{
            console.log(err);
            firebase.auth().createUserWithEmailAndPassword(email,paswd)
            .then(user =>loginUserSuccess(dispatch,user))
            .catch((err)=> loginUserFailed(dispatch,err))
            })
    }
}


const loginUserSuccess = (dispatch,user) => {
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })

    Actions.employeeList({ type:'reset' });
}

const loginUserFailed = (dispatch,err) => {
    dispatch({
        type:LOGIN_USER_FAILED,
        payload:err.message
    })
}