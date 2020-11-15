import * as actiontypes from '../actions/actiontypes';
import {updateobject} from '../../share/utility';

const innitalState = {
    site1: false,
    name: [],
    userId: null,
    error: null,
    loading: false,
    nameDetail:[],
    nameDetailJustOnePopUp:[]

}
const TrelloSite = (action, state) => {
    // console.log("TrelloSite",action.token, state)
    return updateobject(state, {site1: true})
}
const GetSiteTrelloTrue = (action, state) => {
    // console.log("GetSiteTrelloTrue",action, state)
    // console.log("updateobjectupdateobject", {name: action.name});
    return updateobject(state, {name: action.name})
}

// const AddSiteUI = (action, state) => {
//     // console.log("AddSiteUI",action, state)
//     return updateobject(state, {name: {...state.name, action}})
// }
const justOneShowMe = (action,state) => {
    // console.log("justOneShowMe",action, state)
    return updateobject(state,{showMe:action.key})
}
const getDetailStatus = (action, state) => {
    // console.log("getDetailStatus",action, state)
    // console.log("123456reducer",action.listNews)
    return updateobject(state,{nameDetail: action.listNews})
}
const getListDetailStatusJustOne = (action, state) => {
    console.log("reducer",action.data)
    return updateobject(state, {nameDetailJustOnePopUp:action.data})
}
const reducer = (state = innitalState, action) => {
    // console.log("state action old",state,action)
    switch (action.type) {
        case actiontypes.ADD_SITES_TRELLO:
            return TrelloSite(action, state);
        case actiontypes.GET_SITES_TRELLO_TRUE:
            return GetSiteTrelloTrue(action, state);
        // case actiontypes.ADD_SITE_UI:
        //     // console.log("123456",action.item)
        //     return AddSiteUI(action, state);
        case actiontypes.GET_NEWS_UI:
            // console.log("123456",action.item)
            return justOneShowMe(action, state);
        case actiontypes.LIST_DETAIL_NEWS:
            // console.log("123456",action.item)
            return getDetailStatus(action, state);
        case actiontypes.GET_LIST_DETAIL_NEWS_ID_JUST_ONE:
            // console.log("123456",action.item)
            return getListDetailStatusJustOne(action, state);

            default:
            return state
    }
}
export default reducer;