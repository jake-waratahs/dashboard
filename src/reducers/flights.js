import {
    UPDATE_FLIGHT_REQUEST,
    UPDATE_FLIGHT_SUCCESS,
    UPDATE_FLIGHT_FAILURE
} from '../actions/flights'

export default function(state = {}, action){
    let newState = {}

    switch(action.type) {

    case UPDATE_FLIGHT_REQUEST:
        return {
            isFetching: true,
            error: false
        }

    case UPDATE_FLIGHT_SUCCESS:
        newState = {
            isFetching: false,
            error: false,
            departureDate: action.returnDate,
            returnDate: action.departureDate,
            price: action.price
        }

        return Object.assign({}, state, newState)

    case UPDATE_FLIGHT_FAILURE:
        return {
            isFetching: false,
            error: true
        }


    default:
        return state
    }
}