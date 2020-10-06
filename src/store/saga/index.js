import { takeLatest,all,takeEvery } from "redux-saga/effects";
import * as actionsTypes from "../../store/actions/actiontypes";
import {
    addNews,getNews,delelteNews,updateNews
} from "./newsTrello";
import { signIn,signUp,authcheckStateSaga,logoutSaga,checkAuthTimeoutSaga } from './login';

export function* Maincall(){
    yield all (
        [takeEvery(actionsTypes.ADD_SITES_TRELLO,addNews),
                takeEvery(actionsTypes.GET_SITES_TRELLO,getNews),
                takeEvery(actionsTypes.DELETE_NEWS_UI,delelteNews),
                takeEvery(actionsTypes.UPDATE_MEWS_UI,updateNews)
        ])
}
export function* login() {
    yield  all([
        takeEvery(actionsTypes.AUTH_LOGIN_TRUE,signIn),
        takeEvery(actionsTypes.AUTH_SIGNUP,signUp),
        // takeEvery(actionsTypes.AUTH_INITITATE_LOGOUT,logoutSaga),
        // takeEvery(actionsTypes.AUTH_CHECK_STATE,authcheckStateSaga),
        // takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT,checkAuthTimeoutSaga),
        ])
}


