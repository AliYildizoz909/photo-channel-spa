import * as actionTypes from "./channelActionTypes"


export const getChannelDetailSuccess = channel => ({ type: actionTypes.GET_CHANNEL_DETAIL, payload: channel })
export const getChannelCategoriesSuccess = categories => ({ type: actionTypes.GET_CHANNEL_CATEGORIES, payload: categories })