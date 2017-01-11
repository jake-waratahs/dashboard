import { combineReducers } from 'redux'

import weather from './weather'
import news from './news'
import forex from './forex'

const dashboardReducer = combineReducers({
    weather,
    news,
    forex
})

export default dashboardReducer