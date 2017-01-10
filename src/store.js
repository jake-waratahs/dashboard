import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import dashboardReducer from './reducers/index'

export function configureStore(){
    return createStore(
        dashboardReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunkMiddleware
        )
    )
}