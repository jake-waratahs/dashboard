import { 
    UPDATE_WEATHER_REQUEST, 
    UPDATE_WEATHER_FAILURE, 
    UPDATE_WEATHER_SUCCESS 
} from '../actions/weather'

export default function (state = {}, action){
    let newState = {}
    
    switch (action.type) {        
        case UPDATE_WEATHER_REQUEST:
            newState[action.city] = {isFetching: true, error: false}
            return Object.assign({}, state, newState)
        
        case UPDATE_WEATHER_SUCCESS:
            newState[action.city] = {
                isFetching: false,
                error: false,
                weather: action.weather
            }
            return Object.assign({}, state, newState)

        case UPDATE_WEATHER_FAILURE:
            newState[action.city] = {
                isFetching: false,
                error: true
            }            
            return Object.assign({}, state, newState)

        default:
            return state
    }
}