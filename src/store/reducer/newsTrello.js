import * as actiontypes from '../actions/actiontypes';
import {updateobject} from '../../share/utility';

const innitalState = {
    site1: false,
    name: [],
    token: null,
    userId: null,
    error: null,
    loading: false,
    id:[]
}
const TrelloSite = (action, state) => {
    return updateobject(state, {site1: true})
}
const GetSiteTrelloTure = (action, state) => {
    // console.log("reducer sites",action.site)
    // console.log("action name",action.order,action.name)
    console.log("123456",action.id)
    return updateobject(state, {name: action.name,id:action.name.id})
}

const AddSiteUI = (action, state) => {
    // console.log("[...state.name, action.name]", {...state.name, action});
    console.log("[...state.name, action.name]", action.order,action.item);
    return updateobject(state, {name: {...state.name, action}})
}
const reducer = (state = innitalState, action) => {
    switch (action.type) {
        case actiontypes.ADD_SITES_TRELLO:
            return TrelloSite(action, state);
        case actiontypes.GET_SITES_TRELLO_TRUE:
            return GetSiteTrelloTure(action, state);
        case actiontypes.ADD_SITE_UI:
            console.log("123456",action.item)
            return AddSiteUI(action.item, state);
        default:
            return state
    }
}
export default reducer;