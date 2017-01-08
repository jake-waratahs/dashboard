import { combineReducers } from 'redux'

import weather from './weather'

const dashboardReducer = combineReducers({
    weather
})

export default dashboardReducer