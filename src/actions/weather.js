

export const UPDATE_WEATHER = 'UPDATE_WEATHER'

export const updateWeather = () => {
    /* Eventually this will be a request to the OpenWeatherMap API */
    temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    syd = temp[Math.floor(Math.random()*temp.length)]
    sfo = temp[Math.floor(Math.random()*temp.length)]
    return {
        type: UPDATE_WEATHER, 
        syd: syd,
        sfo: sfo
    }
} 