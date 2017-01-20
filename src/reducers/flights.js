import {
    UPDATE_FLIGHT_REQUEST,
    UPDATE_FLIGHT_SUCCESS,
    UPDATE_FLIGHT_FAILURE,
    CHANGE_DEPARTURE_DATE,
    CHANGE_RETURN_DATE
} from '../actions/flights'

export default function(state = {}, action){
    let newState = {}

    switch(action.type) {

    case UPDATE_FLIGHT_REQUEST:
        newState =  {
            isFetching: true,
            error: false
        }
        return Object.assign({}, state, newState)

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
        newState = {
            isFetching: false,
            error: true
        }
        return Object.assign({}, state, newState)

    case CHANGE_DEPARTURE_DATE:
        newState = {
            departureDate: action.date
        }
        return Object.assign({}, state, newState)

    case CHANGE_RETURN_DATE:
        newState = {
            returnDate: action.date
        }
        return Object.assign({}, state, newState)

    default:
        return state
    }
}