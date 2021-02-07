import {call,put,delay} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';
export function* signIn(action){
    const postapi = {
        email:action.email,
        password: action.password,
        returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDahBG6XytMySHh1um9YBIk-F3oyuAYcEQ';
    try{
        const response =  yield axios.post(url,postapi)
        yield localStorage.setItem('access_token',response.data.idToken)
        yield localStorage.setItem('userId',response.data.localId)
        yield put(actions.signInSuccess(response.data.idToken,response.data.localId))
        yield alert("dang nhap thanh cong")
    }
    catch (e) {
        yield  put(actions.auLoginFail(e))
    }
}
export function* signUp(action){
    let postSignUp = {
        email:action.email,
        password: action.password
    }
    let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDahBG6XytMySHh1um9YBIk-F3oyuAYcEQ';
    try{
       yield axios.post(url,postSignUp)
        yield put(actions.signUpSuccess())
    }
    catch (e) {
        yield put(actions.auLoginFail(e))
    }
}
