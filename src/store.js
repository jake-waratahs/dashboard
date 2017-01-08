import { createStore } from 'redux'
import dashboardReducer from './reducers/index'

const defaultState = {
    weather: {}
}

export function configureStore(){
    return createStore(dashboardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}