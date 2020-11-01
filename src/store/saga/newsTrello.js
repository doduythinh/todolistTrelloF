import {put, call} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-trello';

export function* getNews() {
    const token = localStorage.getItem("access_token");
    const queryParams = '?auth=' + token + '&orderBy="userId"';
    const url = 'todolisttrello.json' + queryParams;
    try {
        const response = yield axios.get(url);
        console.log("data",response.data)
        yield put(actions.getSiteTrue(response.data))
        // console.log("12312",response.data)
    } catch (e) {
        yield put(actions.getSiteFail(e.error))
    }
}
export function* addNews(action) {
    // console.log("123123",action.order)
    const dataPostNews = {
        name: action.name,
        order: action.order
    }
    let token = yield localStorage.getItem('access_token')
    const queryParams = '?auth=' + token;
    let url = `todolisttrello.json` + queryParams;
    try {
         yield put(actions.addSiteUI(dataPostNews))
        yield axios.post(url, dataPostNews)
        yield getNews()
    } catch (e) {
        yield put(action.AddSiteFail(e.error))
    }
}
export function* delelteNews(action) {
    const token = localStorage.getItem("access_token")
    let id = action.id
    console.log("1234567delete", action.id);
    const queryParams = '?auth=' + token;
    const url  = `todolisttrello/${id}.json` + queryParams;
    try
    {
        yield axios.delete(url);
        yield getNews()
    }
    catch (e) {
        yield put(actions.getSiteFail(e))
    }
}
export function* updateNews(action){
    const token = localStorage.getItem("access_token")
    let id = action.id
    const dataPutNews = {
        name: action.name,
        order: action.order
    }
    const queryParams = '?auth=' +token;
    const url = `todolisttrello/${id}.json` + queryParams;
    try
    {
        yield axios.put(url,dataPutNews)
        yield getNews()
    }
    catch (e) {
        yield put(actions.getSiteFail(e))
    }

}
export  function* getDetailNewsx() {
    const token = localStorage.getItem("access_token")
    const queryParams = '?auth=' + token + '&orderBy="userId"';
    const url = `listStatusNews.json` + queryParams;
    try
    {
        const response = yield axios.get(url)
        // console.log("123456saga",response.data)
        yield put(actions.getDetailNews(response.data))
    }
    catch (e) {
        yield put(actions.getSiteFail(e))
    }
}
export function* addDetailNews(action) {
    const token = localStorage.getItem("access_token")
    // let id = action.id
    const paramdetail = {
        nameDetail:action.nameDetail,
        orderDetail:action.orderDetail,
    }
    const queryParams = '?auth='+token
    const url = `listStatusNews.json` + queryParams;
    try
    {
       const response =  yield axios.post(url,paramdetail)
        console.log(response)
        yield getDetailNewsx()
    }
    catch (e) {
        yield put(actions.getSiteFail(e))
    }
}