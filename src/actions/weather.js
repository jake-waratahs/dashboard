

export const UPDATE_WEATHER = 'UPDATE_WEATHER'

export const updateWeather = (name) => {
    /* Eventually this will be a request to the OpenWeatherMap API */
    let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let temp = range[Math.floor(Math.random()*range.length)]
    let action = { 
        type: UPDATE_WEATHER,
        weather: {}
    }
    action.weather[name] = temp
    return action
} 