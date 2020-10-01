import * as actionTypes from './actiontypes';

export const AddSite = (name,order) => {
    return {
        type:actionTypes.ADD_SITES_TRELLO,
        name:name,
        order:order
    }
}
export const AddSiteFail = () => {
    return {
        type:actionTypes.ADD_SITES_TRELLO_FAIL
    }
}
export const getSite = () => {
    return {
        type:actionTypes.GET_SITES_TRELLO,
    }
}
export const getSiteTrue = (name,order) => {
    return {
        type:actionTypes.GET_SITES_TRELLO_TRUE,
        name:name,
        order:order
    }
}
export const getSiteFail = () => {
    return {
        type:actionTypes.GET_SITES_TRELLO_FAIL,
    }
}

export const addSiteUI= (item) => {
    return {
        type:actionTypes.ADD_SITE_UI,
        item: item
    }
}
export const deleteNewsSite = (name,order) => {
    return {
        type:actionTypes.DELETE_NEWS_UI,
        order:order,
        name:name
    }
}
export const deleteNews = () => {
    return {
        type:actionTypes.DELETE_NEWS,
    }
}