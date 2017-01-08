import { UPDATE_WEATHER } from '../actions/weather'

export default function (state = {}, action){
    switch (action.type) {
        case UPDATE_WEATHER:
            return {
                syd: action.syd,
                sfo: action.sfo
            }      
        default:
            return state
    }
}