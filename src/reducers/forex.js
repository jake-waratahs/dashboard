import {
    UPDATE_FOREX_REQUEST,
    UPDATE_FOREX_FAILURE,
    UPDATE_FOREX_SUCCESS
} from '../actions/forex.js'

export default function (state = {}, action) {
    let newState = {}

    switch(action.type){

    case UPDATE_FOREX_REQUEST:
        return {
            isFetching: true,
            base: action.base,
            curr: action.curr
        }

    case UPDATE_FOREX_FAILURE:
        return {
            isFetching: false,
            error: true
        }

    case UPDATE_FOREX_SUCCESS:
        newState = { 
            rate: action.rate,
            isFetching: false
        }
        return Object.assign({}, state, newState)

    default:
        return state
    }
}