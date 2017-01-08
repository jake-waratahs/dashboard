import { UPDATE_WEATHER } from '../actions/weather'

export default function (state = {}, action){
    switch (action.type) {
        case UPDATE_WEATHER:
            return Object.assign({}, state, action.weather)      
        default:
            return state
    }
}