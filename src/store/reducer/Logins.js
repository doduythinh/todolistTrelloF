import * as actionTypes from '../actions/actiontypes';
import { updateobject } from "../../share/utility";

const initialState = {
    token:null,
    userId:null,
    error: null,
    loading:false,
    loadingSignUp:true,
    path: "/main",
    pathlogin: "/login"
}
const signInTokenTrue = (action,state) => {
    console.log("action.tokenaction.token", action.token)
    return updateobject(state,{token:action.token,userId:action.userId,error:null,loadding:false})
}
const loginFail  = (action,state) => {
    return updateobject(state,{error: action.error,loading: true})
}
const signUpTrue = (action,state) => {
    return updateobject(state,{token:action.idToken,userId:action.userId,error:null,loading:false})
}
const RedirectSinUp = (action,state) => {
    return updateobject(state,{pathlogin:action.pathlogin,loading:false})
}
const RedirectSinIn = (action,state) => {
    // console.log("signIn",action.path)
    return updateobject(state,{path:action.path})
}
const reducer = (state =initialState,action) =>{
    // console.log("action reducer",action)
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS_TOKEN : return signInTokenTrue(action,state);
        case actionTypes.AUTH_LOGIN_FAIL : return loginFail(action,state);
        case actionTypes.AUTH_SIGNUP_SUCCESS : return signUpTrue(action,state);
        case actionTypes.AUTH_REDIRECT_SIGNUP : return RedirectSinUp(action,state);
        case actionTypes.AUTH_REDIRECT_SIGNIN : return RedirectSinIn(action,state);
        default:
            return state
    }
}
export default reducer;