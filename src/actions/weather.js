import fetch from 'isomorphic-fetch'

import { OWM_KEY } from '../config'

export const UPDATE_WEATHER_REQUEST = 'UPDATE_WEATHER_REQUEST'
export const UPDATE_WEATHER_FAILURE = 'UPDATE_WEATHER_FAILURE'
export const UPDATE_WEATHER_SUCCESS = 'UPDATE_WEATHER_SUCCESS'

function updateWeatherRequest(name){
    return { type: UPDATE_WEATHER_REQUEST, city: name }
}

function updateWeatherSuccess(name, weather){
    return { 
        type: UPDATE_WEATHER_SUCCESS, 
        city: name,
        weather: weather
    }
}

function updateWeatherFailure(name){
    return { type: UPDATE_WEATHER_FAILURE, city: name }  
}

export const fetchWeather = (name) => {
    return dispatch => {
        dispatch(updateWeatherRequest(name))
        return fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${OWM_KEY}&units=metric`
        ).then(response => response.json())
        .then(res => {
            let weather = {
                curr: res.main.temp,
                min: res.main.temp_min,
                max: res.main.temp_max,
                icon: res.weather[0].icon
            }
            return dispatch(updateWeatherSuccess(name, weather))
        }, () => dispatch(updateWeatherFailure(name)))
    }
}