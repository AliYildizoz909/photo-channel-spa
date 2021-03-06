import * as actionTypes from "../../actions/home/homeActionTypes"
import initialState from "../initialState";

export default function homeReducer(state = initialState.home, action) {
    switch (action.type) {
        case actionTypes.GET_FEED:
            return { ...state, feed: action.payload }
        case actionTypes.GET_MOST_CHANNELS:
            return { ...state, mostChannels: action.payload }
        default:
            return state;
    }
}