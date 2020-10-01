import {put, call} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-trello';


export function* addNews(action) {
    console.log("123123",action.order)
    const dataPostNews = {
        name: action.name,
        order: action.order
    }
    let token = yield localStorage.getItem('access_token')
    const queryParams = '?auth=' + token;
    let url = 'todolisttrello.json' + queryParams;
    try {
        yield put(actions.addSiteUI(dataPostNews))
        yield axios.post(url, dataPostNews)
    } catch (e) {
        yield put(action.AddSiteFail(e))
    }
}

export function* getNews(action) {
    const token = localStorage.getItem("access_token");
    const queryParams = '?auth=' + token + '&orderBy="userId"';
    const url = 'todolisttrello.json' + queryParams;
    try {
        const response = yield axios.get(url);
        yield put(actions.getSiteTrue(response.data))
        // console.log("12312",response.data)
    } catch (e) {
        yield put(actions.getSiteFail(e.response.error))
    }
}
export function* delelteNews(action) {
    const token = localStorage.getItem("access_token")
    const dataDeleteNews = {
        name:action.name,
        order:action.order
    }
    const queryParams = '?auth=' + token;
    const url  = 'todolisttrello/${firebasePostId}.json' + queryParams;
    console.log("url")
    try
    {
        yield axios.delete(url,dataDeleteNews);
    }
    catch (e) {
        yield put(actions.getSiteFail(e))
    }
}