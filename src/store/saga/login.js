import {call,put,delay} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

// export  function* logoutSaga(action) {
//     yield call([localStorage, 'removeItem'], 'token');
//     yield call([localStorage, 'removeItem'], 'expirationTime');
//     yield call([localStorage, 'removeItem'], 'userId');
//     yield put(actions.logoutSuccess())
// }
// export function* checkAuthTimeoutSaga (action) {
//     yield delay(action.expirationTime * 1000);
//     yield put(actions.logout());
// }
export function* signIn(action){
    // console.log("123465",action.email)
    // console.log("123465",action.password)
    const postapi = {
        email:action.email,
        password: action.password,
        returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDahBG6XytMySHh1um9YBIk-F3oyuAYcEQ';
    try{
        const response =  yield axios.post(url,postapi)
        console.log("api login",response)
        yield localStorage.setItem('access_token',response.data.idToken)
        yield localStorage.setItem('userId',response.data.localId)
        yield put(actions.signInSuccess(response.data.idToken,response.data.localId),alert('login thanh cong'))
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
        // const userid = localStorage.getItem('userId',response.data.localId)
        // const token = localStorage.getItem('access_token',response.data.idToken)
        const response = yield axios.post(url,postSignUp)
        // console.log("123456789",response)
        // localStorage.getItem('access_token',response.data.idToken)
        // localStorage.getItem('userId',response.data.localId)
        yield put(actions.signUpSuccess())
    }
    catch (e) {
        yield put(actions.auLoginFail(e))
    }
}
// export function* authcheckStateSaga(action) {
//     const token  = yield localStorage.getItem('token');
//     if(!token)
//     {
//         yield put(actions.logout());
//     }
//     else {
//         const expirationDate = yield  new Date(localStorage.getItem('expirationDate'));
//         if(expirationDate <= new Date())
//         {
//             yield put(actions.logout())
//         }
//         else{
//             const userId = localStorage.getItem('userId');
//             yield put(actions.signUpSuccess(token,userId));
//             yield put(actions.checkAuthTimeOut(expirationDate.getSeconds() - new Date().getSeconds() / 1000))
//         }
//     }
// }