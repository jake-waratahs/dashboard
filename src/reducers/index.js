import { combineReducers } from 'redux'

import weather from './weather'
import news from './news'
import forex from './forex'
import flights from './flights'

const dashboardReducer = combineReducers({
    weather,
    news,
    forex,
    flights
})

export default dashboardReducer