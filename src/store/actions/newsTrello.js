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
export const deleteNewsSite = (id) => {
    return {
        type:actionTypes.DELETE_NEWS_UI,
        // order:order,
        // name:name,
        id:id
    }
}
export const deleteNews = (name) => {
    return {
        type:actionTypes.DELETE_NEWS,
        data:name
    }
}
export const updateNews = (name,order,id) => {
    return {
        type:actionTypes.UPDATE_MEWS_UI,
        name:name,
        order:order,
        id:id
    }
}
export const getById = (id) =>{
    return {
        type: actionTypes.GET_NEWS_UI,
        id:id
    }
}
export const addNewsDetail = (nameDetail,orderDetail,id) => {
    return {
        type:actionTypes.ADD_DETAIL_NEWS,
        nameDetail:nameDetail,
        orderDetail:orderDetail,
        id:id
    }
}
export const getDetailNews = (listStatusByid) => {
    // console.log("123456action",listStatusByid)
    return {
        type: actionTypes.LIST_DETAIL_NEWS,
        listStatusByid: listStatusByid,
    }

}
export const getListDetailNews = (id) => {
    return {
        type:actionTypes.GET_LIST_DETAIL_NEWS,
        id:id
    }
}
export const getListDetailNewsById = (id) => {
    return {
        type:actionTypes.GET_LIST_DETAIL_NEWS_ID,
        id:id
    }
}
export const getListDetailNewsByIdData = () => {
    return {
        type:actionTypes.GET_LIST_DETAIL_NEWS_ID_DATA,
    }
}
export const getListDetailNewsByIdJustOne = (data) => {
    return {
        type:actionTypes.GET_LIST_DETAIL_NEWS_ID_JUST_ONE,
        data:data
    }
}
export const addNewsByIdFails = (error) => {
    return {
        type:actionTypes.ADD_SITES_FAILS,
        error:error

    }
}
