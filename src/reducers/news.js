import {
    UPDATE_NEWS_REQUEST,
    UPDATE_NEWS_SUCCESS,
    UPDATE_NEWS_FAILURE
} from '../actions/news'

export default function (state = {}, action) {
    let newState = {}

    switch (action.type) {

    case UPDATE_NEWS_REQUEST:
        newState[action.source] = {isFetching: true, error: false}
        return Object.assign({}, state, newState)

    case UPDATE_NEWS_SUCCESS:
        newState[action.source] = {
            isFetching: false,
            error: false,
            headlines: action.headlines
        }
        return Object.assign({}, state, newState)

    case UPDATE_NEWS_FAILURE:
        newState[action.source] = {isFetching: false, error: true}
        return Object.assign({}, state, newState)

    default:
        return state    
    }
}