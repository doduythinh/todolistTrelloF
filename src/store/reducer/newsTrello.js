import * as actiontypes from '../actions/actiontypes';
import {updateobject} from '../../share/utility';

const innitalState = {
    site1: false,
    name: [],
    token: null,
    userId: null,
    error: null,
    loading: false,
}
const TrelloSite = (action, state) => {
    return updateobject(state, {site1: true})
}
const GetSiteTrelloTure = (action, state) => {
    // console.log("updateobjectupdateobject", {name: action.name});
    return updateobject(state, {name: action.name})
}

const AddSiteUI = (action, state) => {
    return updateobject(state, {name: {...state.name, action}})
}
const deleteSiteUI = (action,state) => {
    return updateobject(state, {name:{...state.name,action}})
}
const reducer = (state = innitalState, action) => {
    switch (action.type) {
        case actiontypes.ADD_SITES_TRELLO:
            return TrelloSite(action, state);
        case actiontypes.GET_SITES_TRELLO_TRUE:
            return GetSiteTrelloTure(action, state);
        case actiontypes.ADD_SITE_UI:
            // console.log("123456",action.item)
            return AddSiteUI(action, state);
        // case actiontypes.DELETE_NEWS:
        //     console.log("123delelt",action.item)
        //     return deleteSiteUI(action.item,state)
            default:
            return state
    }
}
export default reducer;