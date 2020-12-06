import * as actiontypes from '../actions/actiontypes';
import {updateobject} from '../../share/utility';

const innitalState = {
    site1: false,
    name: [],
    userId: null,
    error: null,
    loading: false,
    listStatusByid:[],
    nameDetailJustOnePopUp:[]

}
const TrelloSite = (action, state) => {
    return updateobject(state, {site1: true})
}
const GetSiteTrelloTrue = (action, state) => {
    return updateobject(state, {name: action.name})
}
const justOneShowMe = (action,state) => {
    // console.log("justOneShowMe",action, state)
    return updateobject(state,{showMe:action.key})
}
const getDetailStatus = (action, state) => {
    // console.log("getDetailStatus",action, state)
    // console.log("123456reducer",action.listNews)
    return updateobject(state,{listStatusByid: action.listStatusByid})
}
const getListDetailStatusJustOne = (action, state) => {
    // console.log("reducer",action.data)
    return updateobject(state, {nameDetailJustOnePopUp:action.data})
}
const reducer = (state = innitalState, action) => {
    switch (action.type) {
        case actiontypes.ADD_SITES_TRELLO:
            return TrelloSite(action, state);
        case actiontypes.GET_SITES_TRELLO_TRUE:
            return GetSiteTrelloTrue(action, state);
        case actiontypes.GET_NEWS_UI:
            return justOneShowMe(action, state);
        case actiontypes.LIST_DETAIL_NEWS:
            return getDetailStatus(action, state);
        case actiontypes.GET_LIST_DETAIL_NEWS_ID_JUST_ONE:
            return getListDetailStatusJustOne(action, state);
            default:
            return state
    }
}
export default reducer;