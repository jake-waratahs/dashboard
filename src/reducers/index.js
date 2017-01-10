import { combineReducers } from 'redux'

import weather from './weather'
import news from './news'

const dashboardReducer = combineReducers({
    weather,
    news
})

export default dashboardReducer