import * as actionTypes from './actiontypes';

export const auLoginTrue = (email,password) =>{
  return {
      type:actionTypes.AUTH_LOGIN_TRUE,
      email:email,
      password:password
  }
}
export const auLoginFail = () => {
    return {
        type:actionTypes.AUTH_LOGIN_FAIL
    }
}
export const signInSuccess = (token,userId) => {
    return {
        type:actionTypes.LOGIN_SUCCESS_TOKEN,
        token:token,
        userId:userId
    }
}
export const signUp = (email,password) => {
    return {
        type:actionTypes.AUTH_SIGNUP,
        email:email,
        password:password
    }
}
export const signUpSuccess = (token,userId) => {
    return {
        type:actionTypes.AUTH_SIGNUP_SUCCESS,
        token:token,
        userId:userId
    }
}
export const reDirectPathSignUp = (path) => {
    return {
        type:actionTypes.AUTH_REDIRECT_SIGNUP,
        path:path
    }
}
export const reDirectPathSignIn = (path) => {
    return {
        type:actionTypes.AUTH_REDIRECT_SIGNIN,
        path:path
    }
}
export const authCheckState =() => {
    return {
        type:actionTypes.AUTH_CHECK_STATE
    }
}
export const logout = () => {
    return {
        type:actionTypes.AUTH_INITITATE_LOGOUT
    }
}
export const checkAuthTimeOut = (expirationTime) => {
    return {
        type:actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
}
export const logoutSuccess = () => {
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}